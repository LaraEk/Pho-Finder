
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

    var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=pho&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:20000@" + x.innerHTML + "&key=AIzaSyB3S0uLo0IY9-hlsfrM3aa-jDCLm9ffE6M";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {

        console.log(response);
        console.log(queryURL);
          
      });


}

