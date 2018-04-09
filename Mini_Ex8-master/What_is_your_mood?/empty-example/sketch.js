//Setting up the API from Giphy. This is a search API
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "api_key=59FvKedrxrKXE9yHJqWeKaJdSl6kLmtq";
//Our serachword is "mood", and we want to pull 25 GIFs
//at a time, which is defined in the query below
var query = "&q=mood&limit=25&offset=0&rating=G&lang=en";


function setup(){
//We use no canvas, since we experienced a
//problem with the GIFs appearing outside of it.
//Due to this, all the text is written very simlpy
//in HTML.
  noCanvas();

//Here we combine the API, the API key, and the Query
//to form the URL (Which is where we find the JSON)
var url = "https://api.giphy.com/v1/gifs/search?api_key=59FvKedrxrKXE9yHJqWeKaJdSl6kLmtq&q=Mood&limit=25&offset=0&rating=G&lang=en";

//The JSON is then defined, by using the URL
//variable, and a callback function called gotData.
  loadJSON(url, gotData);

}

//This is the callback function
function gotData(giphy){

//We define X as a random number between 0 and 25.
//We use floor to make sure it returns an even number,
//in order for it to work with the JSON file.
  var x = floor (random (0, 25));

//Lastly we make the GIFs appear. Variable x is
//being used to fetch a random index in the JSON file.
//The entire strings refors to the place in the JSON where
//we can find the data we are looking for.
  createImg(giphy.data[x].images.original.url);

}
