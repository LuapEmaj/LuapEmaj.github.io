document.addEventListener('DOMContentLoaded', function() {

    // 1. We define what "Interactable" elements are
    var targets = document.querySelectorAll('.section, .item, .skill-category');

    for (var i = 0; i < targets.length; i++) {
        
        targets[i].onmouseenter = function(e) {
            // Stop the hover from "bubbling up" to the parent section
            e.stopPropagation();

            // 2. Get the "Parent" of the thing we are hovering over
            // This ensures we only blur things in the same group
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
            this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        };

        targets[i].onmouseleave = function() {
            var parent = this.parentElement;
            var siblings = parent.children;

            for (var j = 0; j < siblings.length; j++) {
                siblings[j].style.opacity = "1";
                siblings[j].style.filter = "none";
                siblings[j].style.boxShadow = "none";
                siblings[j].style.zIndex = "1";
            }
        };
    }
});