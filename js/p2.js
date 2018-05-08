     var slideIndex = 0;
     showSlides();

     function showSlides() {
     	var i;
     	var slides = document.getElementsByClassName("mySlides");
     	var dots = document.getElementsByClassName("dot");
     	for (i = 0; i < slides.length; i++) {
     		slides[i].style.display = "none";
     	}
     	slideIndex++;
     	if (slideIndex > slides.length) {
     		slideIndex = 1;
     	}
     	for (i = 0; i < dots.length; i++) {
     		dots[i].className = dots[i].className.replace(" active", "");
     	}
     	slides[slideIndex-1].style.display = "block";
     	dots[slideIndex - 1].className += " active";
     	setTimeout(showSlides, 5000); // Change image every 4 seconds
     }
     var myButton = document.getElementById("clickButton");
     var myText = document.getElementById("helloText");
     myButton.addEventListener('click', doSomething, false);

     function doSomething() {
     	// 	myText.textContent = "Welcome to rapid language learning methods!!!";
     	//myText.onclick= "Welcome";
     }

     function run() {
     	var newName = document.getElementById("name").value;
     	document.getElementById("change").innerHTML = newName;
     	document.getElementById('here').style.display = 'block';
     }

     function signUpEs() {
     	// window.open(../courses.html);
     	document.getElementById('id01').style.display = 'block';
     }

     function signUpIt() {
     	document.getElementById('id02').style.display = 'block';
     }