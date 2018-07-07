
$(document).ready(function(){  
  $('#gifPage').hide();
  $("#landingpage").hide();
});
// $("#landingpage").hide();

$("button").click(function(){
    $("button").hide();
});

var x = document.getElementById("map");

function getLocation() {
  $("#map").hide();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = position.coords.latitude + "," +
    position.coords.longitude;

    
    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + x.innerHTML + "&radius=5500&type=restaurant&keyword=pho&key="AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M";
    console.log(queryURL);
    $.ajax({

      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {

        console.log(response);
        console.log(queryURL);


        // var imgURL = response.results["0"].photos["0"].photo_reference;

        //   // Creating an element to hold the image
     
        //   var mapDiv = $("#map");
        //   mapDiv.append(image);
          var i = 0;
          var restaurants = [];

        for (i = 0; i < 10; i++) {
            var imgURL = response.results[i].photos["0"].photo_reference;

            // var mapDiv = $("#map");
            // mapDiv.append(image);

              var imageRef = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + response.results[i].photos["0"].photo_reference + "&key=your API key";

              console.log(imageRef);
                restaurants += "<div id=" + response.results[i].name +
                                " class='restaurants' " +
                                "<br><br><div class='box'><img src='" + 'https://image.flaticon.com/icons/png/128/856/856178.png' + "'/>"+
                                "<br><strong> Restaurant Name:</strong> " + response.results[i].name +
                                "<br> <strong>Restaurant Rating:</strong> " + response.results[i].rating +
                                "<br> <strong>Restaurant Address:</strong> " + response.results[i].vicinity +
                                "<br><img src='" + imageRef + "'/></div><br><br><br>";

                            //this works
                            


            $("#restaurantcards").html(restaurants);
          //  $("#restaurantcards").append(image);

            console.log("this bit is working");

          }
          $("img").on("click", function() {
            $("#landingpage").empty();
            $("#gifPage").show();
        
          
  
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=pho&api_key=your API key&limit=1";
        
            $.ajax({
              url: queryURL,
              method: "GET"
            })
              .then(function(response) {
                console.log(queryURL);
        
                console.log(response);
              
                var results = response.data;
                // Looping through each result item
                for (var i = 0; i < results.length; i++) {   
                  // Creating and storing div and p tags
                  var foodDiv = $("<div>");
                  // foodDiv.addClass("newDiv");
        
                  // var p = $("<p>").text("It's Pho-King Time!");
                  // Creating and storing an image tag
                  var foodImage = $("<img>");
                  // Setting the src attribute of the image to a property pulled off the result item
                  foodImage.attr("src", results[i].images.fixed_height.url);
                  foodImage.addClass("gifSize");
             
                  // Appending the paragraph and image tag to the foodDiv
                  // foodDiv.append(p);
                  foodDiv.append(foodImage);
                  
                  $("#gifs").prepend(foodDiv);
                }
                
        
              });
          });
  
        });
    }

      

$(".btn").click(function(){
    $("#landingpage").show();
  });
