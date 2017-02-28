$(document).ready(function(){
  console.log('jquery loaded');


// Send requests to the server using ajax
$.ajax({
  type: 'GET',
  url: '/jokes',
  success: function(response) {
    console.log('response', response); // returns fis
    $('#jokeContainer').empty();
    for (var i = 0; i < response.length; i++) { //response is the array
      $('#jokeContainer').append('<li>' + response[i].whoseJoke + ': ' + response[i].jokeQuestion + ' punchline: ' + response[i].punchLine + '</li>'); //append name to li in DOM
    }
    }
});
 //


// Display response on the DOM
 function getJokeData(data){
  $.ajax({
    type: 'POST',
    url: '/jokes/new',
    data: data,
    success: function(response) {
      console.log('response', response); // returns jokeList array
      $('#jokeContainer').empty();
      for (var i = 0; i < response.length; i++) { //response is the array
        $('#jokeContainer').append('<li>' + response[i].whoseJoke + ': ' + response[i].jokeQuestion + ' punchline: ' + response[i].punchLine + '</li>'); //append name to li in DOM
      }
    }
  });
}


 $('#newJokeButton').on('click', function(){

     //GETTING DATA FROM DOM
     var newJokeObject = {};
     newJokeObject.whoseJoke = $('#whoseJoke').val();
     newJokeObject.jokeQuestion = $('#newJoke').val();
     newJokeObject.punchLine = $('#newPunchLine').val();


     //SENDING AJAX REQUEST
     getJokeData(newJokeObject);

   });

});//end doc ready
