// 1. Find the element
var greetingElement = document.getElementById("main-title"); // This line finds the HTML element with the ID "main-title" 
var hour = new Date().getHours(); //new date() creates a new date object with the current date and time, and getHours() extracts the hour (0-23) from that date object
var fullMessage = " "; // This variable will hold the full message we want to type out

// 2. Decide WHICH message to type based on time
if (hour < 12) {
    fullMessage = "Good Morning! JP here!";
} else if (hour < 18) {
    fullMessage = "Good Afternoon! JP here!";
} else {
    fullMessage = "Good Evening! JP here!";
}

// 3. The Typing Logic
var i = 0;
greetingElement.innerText = ""; // Start with an empty header

function typeWriter() {
    if (i < fullMessage.length) {
        greetingElement.innerText += fullMessage.charAt(i); // Add one letter
        i++;
        setTimeout(typeWriter, 50); // Wait 50ms before the next letter
    }
}

// 4. Start the typing!
typeWriter();


document.addEventListener('DOMContentLoaded', function() { 

    // 1. We define what "Interactable" elements are
    var targets = document.querySelectorAll('.section, .item, .skill-category');

    for (var i = 0; i < targets.length; i++) {
        // this loop goes through each interactable element and adds event listeners for mouseenter and mouseleave
        targets[i].onmouseenter = function(e) {
            // Stop the hover from "bubbling up" to the parent section
            e.stopPropagation();

            // 2. Get the "Parent" of the thing we are hovering over
            //siblings are the other elements in the same group (like other items in the same section)
            //.children gets all the siblings, including the one we are hovering over, so we need to check for that in the loop
            // 'This' ensures we only blur things in the same group
            var parent = this.parentElement;
            var siblings = parent.children;

            for (var j = 0; j < siblings.length; j++) {
                var sibling = siblings[j];
                
                if (sibling !== this) {
                    sibling.style.opacity = "0.4";
                    sibling.style.filter = "blur(1.5px)";
                    sibling.style.transition = "0.3s";
                }
            }

            // 3. Highlight the current one
            this.style.opacity = "1";
            this.style.filter = "none";
            this.style.zIndex = "10";
            this.style.position = "relative";
            this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
        };

        //to reset the styles when the mouse leaves the element
        targets[i].onmouseleave = function() {
            var parent = this.parentElement;
            var siblings = parent.children;

            //length is used to loop through all siblings and reset their styles
            for (var j = 0; j < siblings.length; j++) {
                siblings[j].style.opacity = "1";
                siblings[j].style.filter = "none";
                siblings[j].style.boxShadow = "none";
                siblings[j].style.zIndex = "1";
            }
        };
    }
});