var length1 = document.querySelectorAll(".drum").length;

for (var i=0; i<length1; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    function handleClick() {
       // alert("I got clicked");
       //this.style.color = "white";
       var buttonInnerHTML = this.innerHTML;
       switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
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
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML);

        // default is added to handle any unexpected input. If the buttonInnerHTML does not match any of the specified cases, it will log the value to the console for debugging purposes.
       }
    }
}
 //var audio = new Audio("sounds/tom-1.mp3");
  //      audio.play();



// IT FINDS FIRST BUTTON AND ADDS AN EVENT LISTENER TO IT. WHEN THE BUTTON IS CLICKED, IT WILL CALL THE FUNCTION handleClick.
// we didnt use handleClick() because we dont want to call the function immediately, we want to pass the function as a reference so that it can be called later when the event occurs.

// we could use anonymous function instead of handleClick.
/* 
document.querySelector("button").addEventListener("click", function() {
    alert("I got clicked");
}); 
*/