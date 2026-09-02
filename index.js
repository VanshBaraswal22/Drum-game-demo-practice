var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// It finds all elements with the class "drum" and gets their total number.

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    // "this" refers to the button that was clicked.
    // innerHTML gets the text/key inside that button.

    makeSound(buttonInnerHTML);

    // Calls makeSound() and passes the clicked button's key.

    buttonAnimation(buttonInnerHTML);

    // Calls buttonAnimation() to add a visual effect to the clicked button.

  });

}

// Adds a keyboard event listener to the document.
// It runs whenever a key is pressed.

document.addEventListener("keypress", function(event) {

  // event.key gives us the key that was pressed.

  makeSound(event.key);

  // Plays the sound corresponding to the pressed key.

  buttonAnimation(event.key);

  // Animates the corresponding drum button.

});


// makeSound() takes a key as an argument and plays the matching sound.

function makeSound(key) {

  // switch checks the key and executes the matching case.

  switch (key) {

    // Each case creates and plays the corresponding audio file.

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    // "break" stops the switch after the matching case is executed.

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    // default handles unexpected keys.
    default: console.log(key);
  }
}


// Adds a "pressed" class to the button corresponding to the key.
// After 100ms, the class is removed to create the button animation.

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}