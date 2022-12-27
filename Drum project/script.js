
var drums = document.querySelectorAll(".pianoButton").length;

for(var i = 0; i < drums; i++){
    document.querySelectorAll(".pianoButton")[i].addEventListener("click", function(){
        var buttonHTML = this.innerHTML;
        sound(buttonHTML);
        buttonAnimation(buttonHTML);
    })
}

// For keypress audio

document.addEventListener("keypress", function(event){
    sound(event.key);
    buttonAnimation(event.key);
});

function sound(key){
    switch (key) {
        case 'a':
            var audio1 = new Audio('sounds/audio1.mp3')
            audio1.play();
            console.log(key)
            break;
        
        case 's':
            var audio2 = new Audio('sounds/audio2.mp3')
            audio2.play();
            break;

        case 'd':
            var audio3 = new Audio('sounds/audio3.mp3')
            audio3.play();
            break;

        case 'f':
            var audio4 = new Audio('sounds/audio4.mp3')
            audio4.play();
            break;

        case 'g':
            var audio5 = new Audio('sounds/audio5.mp3')
            audio5.play();
            break;

        case 'h':
            var audio6 = new Audio('sounds/audio6.mp3')
            audio6.play();
            break;

        case 'j':
            var audio7 = new Audio('sounds/audio7.mp3')
            audio7.play();
            break;

        case 'k':
            var audio8 = new Audio('sounds/audio8.mp3')
            audio8.play();
            break;

        case 'l':
            var audio9 = new Audio('sounds/audio9.mp3')
            audio9.play();
            break;

        case 'm':
            var audio10 = new Audio('sounds/audio10.mp3')
            audio10.play();
            break;

        default: console.log(key)
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  