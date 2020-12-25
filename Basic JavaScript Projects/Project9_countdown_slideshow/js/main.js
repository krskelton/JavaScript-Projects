function countdown(){ //function to countdown time in seconds
    var seconds = document.getElementById("seconds").value;
    function tick(){
        seconds = seconds - 1;
        TimeRanges.innerHTML = seconds;
        setTimeout(tick, 1000);
        if(seconds == -1){
            alert("Time's up!");
        }
    }
    tick();
}

//JS to dislay slides
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) { //the function creates an array of slides from the class names. It then goes through the array to make them not visible when they are not the current slide 
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}