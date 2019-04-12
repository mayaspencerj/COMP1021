window.setInterval(function(){
  var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
  $('.navbar').css({
    'background-color' : randomColor,
  });

}, 2000);

function myFunction() {
  var dots = document.getElementById("dots");
  var btnText = document.getElementById("myBtn");
  var moreText = document.getElementById("more");

  if (dots.style.display == "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    document.getElementById("middle").style.height = "570px";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    document.getElementById("middle").style.height = "770px";
  }
}

function access() {
    $("img").hide()
}

function find_location(){

  var x = document.getElementById("inputLocation");
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }


  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }
}
