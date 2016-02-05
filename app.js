//All of your variables giving you access to the DOM should be here
var track = document.getElementsByTagName("audio");
var currentSelection = document.getElementById("currentSelection"); //gives us access to our Banner Element
var tracks = document.getElementsByClassName("track"); //returns all of the elements with the className of "Track"
var songTitle = document.getElementsByClassName("songTitle"); //"Returns all of the elements with the name of SongTitle"
var buttons = document.getElementsByTagName("i"); //"Returns all of the <i> element in the HTML"


//This function when called stops all playing tracks
var stopPlayback = function(){
  for (var i = 0; i < tracks.length; i++) {
    tracks[i].pause();
    buttons[i].className = "fa fa-play";
  }
};

//This function will set the banner to the song that is currently playing
var setSelection = function(title){
  currentSelection.innerHTML = "Now Playing: " + title.innerHTML;
};

//This function will reset the banner
var resetSelection = function(){
  currentSelection.innerHTML = "Select a Song!";
};

//You should add your Event Listener and Buttons Here.
for(var i = 0; i < 'buttons'.length; i++){
  buttons[i].addEventListener('click',function(el){
  var button = el.target;
  var track = button.nextSibling;
  var title = track.nextElementSibling;
  if(track.paused === true){
    stopPlayback(); //stops the playback of every other track
    track.play(); //whatever thing next to the button play (its an audio track)
    setSelection(title);
    button.className = "fa fa-stop";
  }else if(track.paused ===false){
  	stopPlayback();
  	resetSelection();
  	button.className = "fa fa-play";
  }
//      alert("Rock On!!")

      //More Code Here Later

    })
}