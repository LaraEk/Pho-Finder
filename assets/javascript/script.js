$("#landingpage").hide();

var x = document.getElementById("map");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = position.coords.latitude + "," +
    position.coords.longitude;

    // var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=pho&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:20000@" + x.innerHTML + "&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M";
    // var queryURL = "https://maps.googleapis.com/maps/api/place/details/json?input=pho&inputtype=textquery&fields=name,photo,rating,review,formatted_phone_number&locationbias=circle:20000@" + x.innerHTML + "&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M";
    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + x.innerHTML + "&radius=5500&type=restaurant&keyword=pho&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M";
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
        //   var image = $("<img>").attr("src", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + imgURL + "&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M");
        //   var mapDiv = $("#map");
        //   mapDiv.append(image);
          var i = 0;
          var restaurants = [];

        for (i = 0; i < 10; i++) {
            var imgURL = response.results[i].photos["0"].photo_reference;

            // var image = $("<img>").attr("src", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + imgURL + "&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M");
            // var mapDiv = $("#map");
            // mapDiv.append(image);

                restaurants += "<div id=" + response.results[i].name + 
                                " class='restaurants' " +
                                "<br> Restaurant Name: " + response.results[i].name + 
                                "<br> Restaurant Rating: " + response.results[i].rating +
                                "<br> Restaurant Address: " + response.results[i].vicinity 
                                
                                var image = $("<img>").attr("src", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + imgURL + "&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M");

//                                 "><img src=https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + imgURL + "&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M";
            $("#restaurantcards").html(restaurants);
            $("#restaurantcards").append(image);

            console.log("this bit is working");
                 
          }
    }
          
      );

}

$(".btn").click(function(){
    $("#landingpage").show();
  });