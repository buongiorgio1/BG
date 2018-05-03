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
     	slides[slideIndex - 1].style.display = "block";
     	dots[slideIndex - 1].className += " active";
     	setTimeout(showSlides, 5000); // Change image every 4 seconds
     }
     var myButton = document.getElementById("clickButton");
     var myText = document.getElementById("helloText");
     myButton.addEventListener('click', doSomething, false);

     function doSomething() {
     	myText.textContent = "Welcome to rapid language learning methods!!!";
     	//myText.onclick= "Welcome";
     	//<img src="https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=bf44ec3af7e7faf6936af0144c40d991" alt="New York" style="width:100%">
     }
     
     function run(){
  var newName = document.getElementById("name").value;
  document.getElementById("change").innerHTML= newName;
}