#Learn To Code: Music Player

During this workshop you are going to work through creating a simple music player in your web browser. This is a great opportunity to learn how to express your inner Disk Jockey through code! Not even Tiesto is this good!

To build your music player you will need/learn:

1. An awesome music library (Yes we need music for this project).
2. A basic understanding of Javascript.
3. Understanding of the audio API

###Vocabulary
- Event Listener
- Event Loop
- Classes (CSS)
- Callback Functions
- DOM - Document Object Model
- Methods

##Music Player

We want to write a program that will allow us to play our selected songs on the web. Here are the steps we will follow to make it happen:

1. Set up our HTML page to render our song titles.
2. Attach our music to our page using HTML5 [Audio API](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).
3. Linking the DOM with our Javascript
4. Listen for click events triggered by the User
5. Trigger play/pause/stop features of our audio and Manipulate the DOM to dynamically display song titles.


###1. Setting up our HTML.

You have been provided with a skeleton of the HTML required to create your page. Go through and fill out each section with the corresponding song information.

```html
<section>
  <i id="firstButton" class="fa fa-play"></i>

  <h2 class="songTitle">Song Title Goes Here</h2>
</section>
```
Once you have completed this section, let's open up `index.html` and see what happens in the browser.

**Question**:
We haven't done any styling yet our page seems to render nice and neatly. How is this happening?

**Question**:
Where did the 'play' symbol come from?

**Question**:
I typed the name of my songs, why isn't there any music?

###2. Adding our music to the page!

Before we add our tracks to the page, let's practice with the audio api. You have been provided with a sandbox to try and implement the audio api on your own. Let's try adding audio to our sandbox page and observe our results. You can use the [Audio API](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) as a guide.

Practicing.
Practicing..
Practicing...
Practicing....

OK! How'd it go?

**Question**
What behavior did you notice when interacting with the `audio` element?

Let's move back to `index.html` and add our music to the page.

```javascript
<audio src="songs/Bis_Co.mp3" class="track"></audio>
```

###3. Linking the DOM with our Javascript

Awesome, now our HTML is all set to go. Let's hop over to our `app.js` file.

Every element on our HTML page is part of what is known as the DOM (Document Object Model). Using Javascript we can interact with the DOM. This will be how get our audio to respond to user input.

First things first, targeting our DOM Elements in Javascript

The Target element we want to interact with in the HTML.

```html
<section>
  <i id="firstButton" class="fa fa-play"></i>
  <audio src="songs/Bis_Co.mp3" class="track"></audio>
  <h2 class="songTitle">Bis Co (Original Mix) - Mihai Popoviciu</h2>
</section>

```

Storing the element to a variable for later usage in the Javascript.

```javascript
var track = document.getElementsByTagName("audio")
```
**Question**
What does `document.getElementsByTagName` mean, and why is it plural?

You will notice that we have multiple elements on the DOM that we need to work with. Rather than selecting them all individually let's access all of them in groups.

Add the following code to your JS

```javascript
var currentSelection = document.getElementById("currentSelection"); //gives us access to our Banner Element
var tracks = document.getElementsByClassName("track"); //returns all of the elements with the className of "Track"
var songTitle = document.getElementsByClassName("songTitle"); //"Returns all of the elements with the name of SongTitle"
var buttons = document.getElementsByTagName("i"); //"Returns all of the <i> element in the HTML"

```

**Discuss**
What do you think the difference is between `.getElementsByClassName` and `.getElementsByTagName` and `.getElementById`?

###4. Listening for Events

Now that we have access to our elements lets add an Event Listener to them. We specifically want to add a `click` listener to our buttons. We will need a loop to make sure we hit all of our buttons. Your code should look something like this..

```javascript
//"For Loop" => for iterating over all of our values in the buttons array

//'target' => should be the element you want to add a listener to.

//'event' => should be the specific event you're listening for.

for(var i = 0; i < 'target'.length; i++){
  target[i].addEventListener('event',function(el){
      //var button = el.target;
      //var track = button.nextSibling;
      //var title = track.nextElementSibling;

      alert("I heard your click!")
      //More Code Here Later

    })
}

```
Once you've got your listener wired up for all of your buttons open `index.html` in the browser. Click the buttons and make sure `I heard you click!` pops up in the browser for each one!

**DISCUSS**
What does the following code have to do with our eventListener

```javascript
var button = el.target;
var track = button.nextSibling;
var title = track.nextElementSibling;
```


###5. Triggering Play/Pause/Stop and Dynamically Changing our display.

You have been provided with 3 functions to assist in the creation of your player interface.

1. `stopPlayback()` pauses all tracks, resets all buttons to the 'play' icon.
2. `setSelection(title)` takes the title of our track in .
3. `resetSelection()` resets the banner to its default 'Select a Song!' text.

We also have several methods that are available to us to interact with our audio elements.

1. `selectedTrack.play()` This method causes the targeted song to begin playing.
2. `selectedTrack.pause()` This file causes the targeted song to pause. (**We will use pause to stop our track**)
3. `selectedTrack.paused` Boolean value that lets us know if the track is currently paused or playing (paused = true => track isn't playing, paused = false => track is currently playing).

We can use a combination of these functions, methods, and values, to create the functionality that we expect our Music Player to have.

Let's use the following stories to guide our logic.


```
On page load no music should be playing.

Banner should read "Select a Song!" when no music is playing.

When user selects a song, the banner should change to the current song playing.

When a song is not playing, it should have a 'play' icon.

When a song is playing, it should have a 'stop' icon.

When changing a song, the song last being played should be paused at it's current time.

When stopping a song, it should hold the time it was stopped at.

When a song finishes playing it should reset itself to the beginning of the track.

```

**Discuss in your group potential ways to structure our functions and methods to achieve the behavior above**

We can use our function and methods as follows

```javascript
if(track.paused === true){
  stopPlayback();
  track.play();
  setSelection(title);
  button.className = "fa fa-stop";
}else if(track.paused === false){
  stopPlayback();
  resetSelection();
  button.className = "fa fa-play";
}
```
place the above code inside your event listener. Be sure to remove the `alert("I heard your click!")` since we will not be needing it anymore.

Now the moment of truth. Open your HTML page and give your Music Player a whirl.

**REVIEW AND QUESTIONS**
