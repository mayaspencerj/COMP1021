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


function access_mode(){
  var options = document.getElementById('shown').innerHTML;
  if (options == "Show Images") {
    document.getElementById("shown").innerHTML = "Hide Images";
    $("img").show();
  } else {
    document.getElementById("shown").innerHTML = "Show Images";
    $("img").hide();
    var options = document.getElementById("shown")
  }
}


var x = document.getElementById("import");
function getLocation(){

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;

}


function initMap() {
  // Map options
  var destinations = [
    {
      coords:{lat:53.807678,lng:-1.557490},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/red-stars.png',
      title: "CodeFirst:Girls",
      description: "Courses free of charge to teach the basics of HTML, JS and CSS to females with no technical background. They have many courses around all universities across the UK, for example at the University of Leeds.",
      link: "https://www.codefirstgirls.org.uk",
      image:"images/cfg.png"
    },
    {
      coords:{lat:452.379580,lng:-1.563230},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/red-stars.png',
      title: "CyberFirst",
      description: "Short courses designed to introduce students to the world of cyber security. Courses are free, with accomodation and food provided for residential courses",
      link: "https://www.cyberfirst.ncsc.gov.uk",
      image:"images/cyber_first.png"
    },

    {
      coords:{lat:38,lng:-122},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/red-stars.png',
      title: "Women who Code",
      description: "When you become a part of Women Who Code you gain access to programs and services that are designed to help you step up your tech career. Gain access to coding tutorials, articles, videos, and other educational materials to excel",
      link: "https://www.womenwhocode.com",
      image:"images/women_who_code.jpg"
    },
    {
      coords:{lat:38,lng:-122},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/red-stars.png',
      title: "Black girls Code",
      description: " To increase the number of women of color in the digital space by empowering girls of color ages 7 to 17 to become innovators in STEM fields, leaders in their communities, and builders of their own futures through exposure to computer science and technology. To provide African-American youth with the skills to occupy some of the 1.4 million computing job openings expected to be available in the U.S. by 2020, and to train 1 million girls by 2040.",
      link: "http://www.blackgirlscode.com",
      image:"images/bgc.png"
    },
    {
      coords:{lat:51.527292,lng: -0.055544},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/red-stars.png',
      title: "23 Code Street",
      description: "We are on a mission to empower all women from all walks of life with the skills and confidence to be technical. We aim to give them the tools needed to build our futures.",
      link: "https://www.23codestreet.com",
      image:"images/23code.jpg"
    }

  ]

  var options = {
    //default center and zoom in map when webpage opened
    zoom:4,
    center: {lat:51.5074,lng:0.1278}
}

  // New map
  var map = new
  google.maps.Map(document.getElementById('map'), options);

  // for each destination
  destinations.forEach(destination => {
  // add a marker
    addMarker(destination);
  // and add it to the list
})

  // add destination to list
  function addDestinationToList(destination, infowindow, marker) {
    // get list from html
     var listElement = document.getElementById("list");
    // create new list item
     var newListItem = document.createElement("li")
    // add label to list items
     newListItem.appendChild(document.createTextNode(destination.title))
    // add item to list
     listElement.appendChild(newListItem)

    // when clicked list items take to destination coords on map
     newListItem.onclick = function () {
       map.setCenter(destination.coords);
      // when clicked list item zooms in on destination coords on map
       map.setZoom(5);
       // when list item is clicked the corresponding infowindow is opened after a small delay
       setTimeout(function() { infowindow.open(map, marker) }, 900);


       var element = document.getElementById('map');
       element.scrollIntoView();
       element.scrollIntoView({behavior: "smooth"});

     }
  }
  // Add Marker Function
  function addMarker(props){
  // Add using destination coords and add icon image as marker
    var marker = new google.maps.Marker({
         position:props.coords,
         map:map,
         icon:props.iconImage
     });
    // check content
    var infowindow = new google.maps.InfoWindow({
      // Layout of info window - title, description, image and link.
      content:"<div class='popup'><h1>" +
       props.title +
       "</h1><p>" +
       props.description +
      "</p>" +
       "<a href='" +
       props.link +
       "'target='_blank'>Click here to be directed to their homepage!</a>" +
       "<img class='popupimage' src='"+ props.image +"'></div>"

    });

    // Add listener for when a marker is clicked on
    marker.addListener('click', function(){
      infowindow.open(map, marker);
    });
    addDestinationToList(props, infowindow, marker)
  }
}
