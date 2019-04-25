window.setInterval(function(){
  var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
  $('.navbar').css({
    'background-color' : randomColor,
  });

}, 2000);

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
      coords:{lat:40.4319,lng:116.5704},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/red-stars.png',
      title: "CyberFirst",
      description: "Short courses designed to introduce students to the world of cyber security. Courses are free, with accomodation and food provided for residential courses",
      link: "https://www.cyberfirst.ncsc.gov.uk",
      image:"cyber_first.png"
    },

    {
      coords:{lat:40.4319,lng:116.5704},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/red-stars.png',
      title: "CyberFirst",
      description: "Short courses designed to introduce students to the world of cyber security. Courses are free, with accomodation and food provided for residential courses",
      link: "https://www.womenwhocode.com",
      image:"cyber_first.png"
    }

  ]

  // New map
  var map = new
  google.maps.Map(document.getElementById('map'), options);

  // for each destination
  destinations.forEach(destination => {
  // add a marker
    addMarker(destination);
  // and add it to the list
  })

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition();
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }


  var options = {
    //default center and zoom in map when webpage opened
    zoom:4,
    center: {lat:position.coords.latitude,lng:position.coords.longitude}
  }

  console.log(position.coords.latitude)
  console.log(position.coords.longitude)

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
