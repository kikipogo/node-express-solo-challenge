
var jokeObject;

$(document).ready(function(){
  console.log('jquery loaded');
getJokeData();

  // Send requests to the server using ajax
  function getJokeData(){
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response) {
      console.log('response', response); // returns fis
    }
  });
}
  //
  $('#newJokeButton').on('click', function(){
    var whoseJoke = $('#whoseJoke').val();
    var jokeQuestion = $('#newJoke').val();
    var punchLine = $('#newPunchLine').val();
    var jokeObject = {
    whoseJoke: whoseJoke,
    jokeQuestion: jokeQuestion,
    punchLine: punchLine
  };

console.log(jokeObject);
  // Display response on the DOM
  function postJokesDOM(response){
        // $('#jokeContainer').empty();
        for (var i = 0; i < response.length; i++) { //response is the array
          $('#jokeContainer').append('<li>' +
           response[i].whoseJoke + ': ' +
           response[i].jokeQuestion + ' punchline: ' +
           response[i].punchLine + '</li>'); //append name to li in DOM
         }
      }


// send new jokes to DOM

    $.ajax({
      type: 'POST',
      url: '/jokes',
      data: jokeObject,
      success: function(response) {
        console.log(response);
        getJokeData();
        $('#jokeContainer').empty();
        for (var i = 0; i < response.length; i++) { //response is the array
          $('#jokeContainer').append('<li>' +
           response[i].whoseJoke + ': ' +
           response[i].jokeQuestion + ' punchline: ' +
           response[i].punchLine + '</li>'); //append name to li in DOM
         }
      }
    });
      });
  });


//
// });//end doc ready
