$(document).ready(function(){
  console.log('jquery loaded');
<<<<<<< Updated upstream


// Send requests to the server using ajax
$.ajax({
  type: 'GET',
  url: '/jokes',
  success: function(response) {
    console.log('response', response); // returns fis
    }
});
 //


// Display response on the DOM
getJokeData();
function getJokeData(){
  $.ajax({
    type: 'POST',
    url: '/jokes/new',
    success: function(response) {
      console.log('response', response); // returns jokeList array
      $('#jokeContainer').empty();
      for (var i = 0; i < response.length; i++) { //response is the array
        $('#jokeContainer').append('<li>' + response[i].whoseJoke + ': ' + response[i].jokeQuestion + ' punchline: ' + response[i].punchLine + '</li>'); //append name to li in DOM
      }
    }
  });
}
=======


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

>>>>>>> Stashed changes

     //SENDING AJAX REQUEST
     getJokeData(newJokeObject);

   });

<<<<<<< Updated upstream
// $('#newJokeButton').on('click', function(){
//     var newJokeObject = {};
//     newJokeObject.whoseJoke = $('whoseJoke').val();
//     $.ajax({
//       type: 'POST',
//       url: '/jokes/new/new',
//       data: newJokeObject,
//       success: function(response) {
//         console.log(response);
//         getJokeData();
//       },
//       error: function(error){
//       alert('ERROR: Please Enter A New NAME!');
//     }
//     });
//   });

=======
>>>>>>> Stashed changes
});//end doc ready
