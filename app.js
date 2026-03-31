// app.js - Fixed typing effect

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. TYPING EFFECT
    // ============================================
    var greetingElement = document.getElementById("main-title");
    
    if (greetingElement) {
        var hour = new Date().getHours();
        var fullMessage = "";
        
        // Easter egg: 10% chance of a funny greeting
        var easterEggGreetings = [
            "Greetings, human! 👽",
            "It's-a me, JP! 🍄",
            "JP in the house! 🎤",
            "JP.exe started successfully ⚙️",
            "ERROR: Brain not found, JP here anyway! 🧠",
            "NAA LAGE KA??! 🐱‍👤",
            "oi brad!!",
            "hi pogi"
        ];
        
        if (Math.random() < 0.1) {
            fullMessage = easterEggGreetings[Math.floor(Math.random() * easterEggGreetings.length)];
        } else if (hour < 12) {
            fullMessage = "Good Morning! JP here! 🌅";
        } else if (hour < 18) {
            fullMessage = "Good Afternoon! JP here! ☀️";
        } else {
            fullMessage = "Good Evening! JP here! 🌙";
        }
        
        // Clear existing content
        greetingElement.innerHTML = "";
        
        var i = 0;
        var typingSpeed = 50;
        var cursor = '<span class="typing-cursor">|</span>';
        
        function typeWriter() {
            if (i < fullMessage.length) {
                i++;
                // Add variable speed for more natural typing (slower for punctuation)
                var currentChar = fullMessage[i - 1];
                var nextSpeed = typingSpeed;
                
                if (currentChar === '!' || currentChar === '.' || currentChar === ',') {
                    nextSpeed = 150;
                } else if (currentChar === ' ') {
                    nextSpeed = 40;
                }
                
                greetingElement.innerHTML = fullMessage.substring(0, i) + cursor;
                setTimeout(typeWriter, nextSpeed);
            } else {
                // Remove cursor after typing completes
                greetingElement.textContent = fullMessage;
            }
        }
        
        // Start typing after a small delay to ensure DOM is ready
        setTimeout(typeWriter, 200);
    }
    
    // ============================================
    // 2. HOVER EFFECT
    // ============================================
    var targets = document.querySelectorAll('.section, .item, .skill-category');
    
    for (var i = 0; i < targets.length; i++) {
        
        targets[i].onmouseenter = function(e) {
            e.stopPropagation();
            
            var parent = this.parentElement;
            var siblings = parent.children;
            
            for (var j = 0; j < siblings.length; j++) {
                if (siblings[j] !== this) {
                    siblings[j].style.opacity = "0.4";
                    siblings[j].style.filter = "blur(1.5px)";
                    siblings[j].style.transition = "all 0.3s ease";
                }
            }
            
            this.style.opacity = "1";
            this.style.filter = "none";
            this.style.zIndex = "10";
            this.style.position = "relative";
            this.style.transform = "scale(1.02)";
            this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
        };
        
        targets[i].onmouseleave = function() {
            var parent = this.parentElement;
            var siblings = parent.children;
            
            for (var j = 0; j < siblings.length; j++) {
                siblings[j].style.opacity = "1";
                siblings[j].style.filter = "none";
                siblings[j].style.transform = "scale(1)";
                siblings[j].style.boxShadow = "none";
                siblings[j].style.zIndex = "1";
            }
        };
    }
    
    // ============================================
    // 3. ACTIVE NAVIGATION
    // ============================================
    var currentPage = window.location.pathname.split("/").pop();
    var navLinks = document.querySelectorAll('.nav a');
    
    if (currentPage === "" || currentPage === "index.html") {
        currentPage = "index.html";
    }
    
    for (var i = 0; i < navLinks.length; i++) {
        var link = navLinks[i].getAttribute('href');
        if (link === currentPage) {
            navLinks[i].classList.add('active');
        }
    }
    
    // ============================================
    // 4. PAGE FADE-IN
    // ============================================
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";
    
    window.addEventListener('load', function() {
        document.body.style.opacity = "1";
    });
    
    // ============================================
    // 5. SCROLL PROGRESS BAR
    // ============================================
    var progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.insertBefore(progressBar, document.body.firstChild);
    
    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    
});