//All of your variables giving you access to the DOM should be here




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

//You should add your Event Listner and Buttons Here.
