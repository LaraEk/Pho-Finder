


$("button").on("click", function() {

       // MapQuest API
       // var queryURL = "https://www.mapquestapi.com/geocoding/v1/address?key=xG2AsaO7IQyvtx95sqKCAAX2KFf3jyzS&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500";

       var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=pho&key=AIzaSyBJPuiaP0Xptia5x3aKgizYLkzqMTAdMMg";
     // Performing an AJAX request with the queryURL
     $.ajax({
       url: queryURL,
       method: "GET"
     })
       // After data comes back from the request
       .then(function(response) {

         console.log(response);
         console.log(response.name);
         

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
// //To use this code on your website, get a free API key from Google.
// //Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

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



// // $("#near-you").on("click", function(event) {
// //    event.preventDefault();
// // });

// // $("#Zipcode").on("click", function(event) {
// //     event.preventDefault();
// //   });