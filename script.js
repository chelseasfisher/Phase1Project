var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
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

// Comment Section //

// Like Button Section //

var btn = document.getElementById('btn');

function toggle(){
if(btn.classList.contains("far")){
  btn.classList.remove("far");
  btn.classList.add("fas");
}else{
  btn.classList.remove("fas");
  btn.classList.add("far");
}
}

var btn = document.getElementById('btn');

function toggle(){
if(btn.classList.contains("far")){
  btn.classList.remove("far");
  btn.classList.add("fas");
}else{
  btn.classList.remove("fas");
  btn.classList.add("far");
}
}



let toggleStatus = true;
document.addEventListener("DOMContentLoaded", (event)=>{
    console.log('hi')
    const p = document.querySelector(".profile");
    p.addEventListener("click",()=>{
        if(toggleStatus === false){
            document.querySelector(".drop-down").style.visibility = "hidden";
            document.querySelector("#home1");
            toggleStatus = true;
        }else if(toggleStatus === true){
            document.querySelector(".drop-down").style.visibility = "visible";
            document.querySelector("#home1");
            toggleStatus = false;
        }
    })
})


function bigImg(x) {
  x.style.height = "110px";
  x.style.width = "100px";
}

function normalImg(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'instagram-data1.p.rapidapi.com',
		'X-RapidAPI-Key': '632590c381msh68930b7f5a63d6ap17243cjsnf28efd0c8d36'
	}
};

fetch('https://instagram-data1.p.rapidapi.com/comments?post=https%3A%2F%2Fwww.instagram.com%2Fp%2FCbsZTahtQVH%2F', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
