
$(".nearYou").on("click", function() {
    
    // var latlon = 38.9015023 + "," + -77.0505726;
    // //    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location" + latlon+ "&radius=1500&type=restaurant&keyword=pho&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M";
    // var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location" + latlon + "&keyword=pho&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M"
    var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=pho&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M";
     $.ajax({
       url: queryURL,
       method: "GET"
     })
       // After data comes back from the request
       .then(function(response) {

         console.log(response);
           
         $("#pho").text(response.candidates[0].name);

         var imgURL = response.candidates["0"].photos["0"].photo_reference;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + imgURL + "&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M");
          var mapDiv = $("#map");
          mapDiv.append(image);
       });
   });



// var x = document.getElementById("demo");

// function getLocation() {
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(showPosition, showError);
//    } else {
//        x.innerHTML = "Geolocation is not supported by this browser.";
//    }
// }

// function showPosition(position) {
//    var latlon = position.coords.latitude + "," + position.coords.longitude;
//    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
//    +latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
//    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
// }

// function showError(error) {
//    switch(error.code) {
//        case error.PERMISSION_DENIED:
//            x.innerHTML = "User denied the request for Geolocation."
//            break;
//        case error.POSITION_UNAVAILABLE:
//            x.innerHTML = "Location information is unavailable."
//            break;
//        case error.TIMEOUT:
//            x.innerHTML = "The request to get user location timed out."
//            break;
//        case error.UNKNOWN_ERROR:
//            x.innerHTML = "An unknown error occurred."
//            break;
//    }
// }



// $("#near-you").on("click", function(event) {
//    event.preventDefault();
// });

// $("#Zipcode").on("click", function(event) {
//     event.preventDefault();
//   });