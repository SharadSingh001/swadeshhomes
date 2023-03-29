/**
Random functionality
*/

function getInfo(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;

	console.log(name);
	console.log(email);
	console.log(phone);
	console.log(message);

	var link = "mailto:info@swadeshhomes.org"
             + "?cc=sharad@swadeshhomes.org"
             + "&subject=" + encodeURIComponent("Swadesh Homes Foundation Contact Request")
             + "&body=" + encodeURIComponent("Name: " + name + "\n" + "Email: " + email + "\n" + "Phone: " + phone + "\n\n" + "Message: " + message)
    ;

    window.location.href = link;
}

function videoFunction() {
  var video = document.getElementById("SwadeshHomesAdVideo");
  var btn = document.getElementById("myBtn");

  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
