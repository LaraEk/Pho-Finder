 var queryURL = "https://api.yelp.com/v3/businesses/search?location=22204&term=pho"

    $.ajax({
      url: queryURL,
      method: "GET",
      headers: {"Authorization": "6kIsQyTnzc0Dss6kX_MYF6mbShfjZAkRv9ssLhO7cHHr0pH5pkVdI8x_6cV9qtRjEX3cc0WqpZNBYew0qre0NEDv1qNMOqMcBC8KQG39NxgHAfBn0f9T0P1y8V8uW3Yx"}
    }).then(function(response) {
console.log(response)
        });