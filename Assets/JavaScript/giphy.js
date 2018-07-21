var topic = [
    "Australia",
    "USA",
    "Brazil",
    "Italy"
];

$('button').on('click', function() {
  console.log("Clicked Button");
  
})
    var topic= $(this).attr("data-search");
   
   
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +topic+ "&api_key=I7ZUNNcBhD24mzmGIIKYcyxi0HBlBxx7&limit=10";
    console.log(queryURL);
  
    $.ajax({
      url: queryURL,
      method: "GET"

    })
      .then(function(response){ 
        console.log(response);
     
        for (var i=0; i <response.data.length; i++) {
        console.log(response.data[0].rating);

        // var topicDiv = $('<div>');
        var datasearchImage = $('<img>');
        datasearchImage.attr('src', response.data[i].images.fixed_height.url);


          $('body').append("<p>Rating: " + response.data[0].rating + "</p>");
          $('body').append("<img src=' " +response.data[0].images.downsized.url +"'>");
          
        
        }
      })
          
      
 



//Notes for Starting and Stoping the Gif

    // if (topic === "still") {
    //   $(this).attr("src", $(this).attr("data-animate"));
    //   $(this).attr("data-state", "animate");
    // } else {
    //   $(this).attr("src", $("this").attr("data-still"));
    //   $(this).attr("data-state", "still");
    // }



    //Need to add Mobile Responsiveness
    //Allow users to request additional gifs
    //Add to portfolio
