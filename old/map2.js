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
      coords:{lat:40.4319,lng:116.5704},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/red-stars.png',
      title: "The Great Wall of China",
      description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe with an eye to expansion.",
      link: "https://www.tripadvisor.co.uk/Attraction_Review-g294212-d325811-Reviews-Mutianyu_Great_Wall-Beijing.html",
      image:"https://www.snopes.com/tachyon/2018/07/great_wall_of_china.jpg"
    },
    {
      coords:{lat:-13.0928,lng:-72.3226},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/blu-stars.png',
      title: "Machu Picchu",
      description: "Machu Picchu is a 15th-century Inca citadel located in southern Peru, on a mountain ridge 2,430 metres above sea level. Most archaeologists beleive that Machu Picchu was contructed as an estate for the Inca emperor Pachacuti (1438-1472). Often mistakenly referred to as the Lost City of the Incas",
      link: "https://www.tripadvisor.co.uk/Tourism-g294318-Machu_Picchu_Sacred_Valley_Cusco_Region-Vacations.html",
      image: "https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/13854/SITours/2-day-private-tour-to-machu-picchu-from-cusco-in-cusco-218710.jpg"
    },
    {
      coords:{lat:38.8913,lng:-77.0261},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/ylw-stars.png',
      title: "Smithsonian National Museum of National History",
      description: "The National Museum of Natural History is a natural history museum administered by the Smithsonian Institution, located on the National Mall in Washington, D.C., United States. It has free admission and is open 364 days a year. In 2016, with 7.1 million visitors, it was the fourth most visited museum in the world and the most visited natural-history museum in the world",
      link: "https://www.tripadvisor.co.uk/Attraction_Review-g28970-d104867-Reviews-Smithsonian_National_Museum_of_Natural_History-Washington_DC_District_of_Columbia.html",
      image: "http://www.the-visitor-center.com/pages/Smithsonian-Natural-History-Museum/slides/smithsonian-natural-history-museum-000.jpg"
    },
    {
      coords:{lat:54.0728,lng:-2.1579},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
      title: "Malham Cove",
      description: "Malham Cove is a large curved limestone formation 0.6 miles (1 km) north of the village of Malham, North Yorkshire, England. It was formed by a waterfall carrying meltwater from glaciers at the end of the last Ice Age more than 12,000 years ago. Today it is a well-known beauty spot within the Yorkshire Dales National Park. ",
      link: "https://www.tripadvisor.co.uk/Attraction_Review-g1076872-d261303-Reviews-Malham_Cove-Malham_Yorkshire_Dales_National_Park_North_Yorkshire_England.html",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/b8/0e/a5/base-of-malham-cove.jpg"
    },
    {
      coords:{lat:48.8606,lng:2.3376},
      iconImage:'http://maps.google.com/mapfiles/kml/paddle/ylw-stars.png',
      title:"The Louvre Museum",
      description:"Originally a royal palace but now the world's most famous museum, is a must-visit for anyone with a slight interest in art. Some of the museum's most celebrated works of art include the Mona Lisa and the Venus of Milo.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g187147-d188757-Reviews-Louvre_Museum-Paris_Ile_de_France.html",
      image:"https://cf-r.365ticketsglobal.com/resized/486x324/3464-louvre_museum_outside.jpg"
    },
    {
      coords:{lat:36.1070,lng:-112.1130},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/grn-stars.png",
      title:"Grand Canyon National Park",
      description:"Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history. Lipan Point, with wide views of the canyon and Colorado River, is particularly popular, especially at sunrise and sunset.",
      link:"https://www.tripadvisor.co.uk/Tourism-g143028-Grand_Canyon_National_Park_Arizona-Vacations.html",
      image:"https://www.tripsavvy.com/thmb/C9mSa9A8KfUr8f7d_UyNUP-OfTI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/canyon-and-river-at-sunset---toroweap-overlook--grand-canyon--arizona--152836923-5a21d2c7aad52b0037fa48b1.jpg"
    },
    {
      coords:{lat:43.0896,lng:-79.0849},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/grn-stars.png",
      title:"Niagara Falls",
      description:"Niagara Falls is the collective name for three waterfalls that straddle the international border between the Canadian province of Ontario and the US state of New York. They form the southern end of the Niagara Gorge. From largest to smallest, the three waterfalls are the Horseshoe Falls, the American Falls and the Bridal Veil Falls.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g154998-d186167-Reviews-Niagara_Falls-Niagara_Falls_Ontario.html",
      image:"https://media-cdn.tripadvisor.com/media/photo-s/0d/f4/e6/4f/niagara-falls-canadian.jpg"
    },
    {
      coords:{lat:33.2600,lng:103.9186},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/grn-stars.png",
      title:"Jiuzhaigou Natural Reserve",
      description:"Jiuzhaigou is composed of three valleys arranged in a Y shape. The Rize and Zechawa valleys flow from the south and meet at the centre of the site where they form the Shuzheng valley, flowing north to the mouth of the valley.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g303770-d319081-Reviews-Jiuzhaigou_Natural_Reserve-Jiuzhaigou_County_Sichuan.html",
      image:"https://www.3rdpoletour.com/assets/images/travel-guide/jiuzhaigou/crystal-clear-lakes-jiuzhaigou.jpg"
    },
    {
      coords:{lat:52.3600,lng:4.8852},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/ylw-stars.png",
      title:"Rijksmuseum",
      description:"The museum is located at the Museum Square in the borough Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw. The museum is dedicated to arts and history and is one of the most visited museums in Amsterdam.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g188590-d189379-Reviews-Rijksmuseum-Amsterdam_North_Holland_Province.html",
      image:"https://lh3.googleusercontent.com/f1FEBjOL98KdOUQCZ3fJwi5Il82Qznq7Q7Q6lKVjUxg3OGGR2Y1nCV05uwsiMIelhCWHpv6ML82hEk5jDg0f6hmNjdU=s320"
    },
    {
      coords:{lat:51.4967,lng:-0.1764},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/ylw-stars.png",
      title:"Natural History Museum",
      description:"The museum is home to life and earth science specimens comprising some 80 million items within five main collections: botany, entomology, mineralogy, paleontology and zoology. The museum is a centre of research specialising in taxonomy, identification and conservation.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g186338-d187676-Reviews-Natural_History_Museum-London_England.html",
      image:"https://1471382417.rsc.cdn77.org//media/1398/natural-history-museum.jpg?anchor=center&mode=crop&width=767&rnd=131836483140000000"
    },
    {
      coords:{lat:51.1789,lng:-1.8262},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/blu-stars.png",
      title:"Stonehenge",
      description:"Stonehenge is a prehistoric monument in Wiltshire, England, two miles (3 km) west of Amesbury. It consists of a ring of standing stones, with each standing stone around 13 feet (4.0 m) high, seven feet (2.1 m) wide and weighing around 25 tons. Archaeologists believe it was constructed from 3000 BC to 2000 BC. ",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g528762-d188527-Reviews-Stonehenge-Amesbury_Wiltshire_England.html",
      image:"https://cf-r.365ticketsglobal.com/resized/486x324/30115-Stonehenge11014.jpg"
    },
    {
      coords:{lat:40.7462,lng:14.4989},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/blu-stars.png",
      title:"Pompeii Ruins",
      description:"Pompeii was an ancient Roman city near modern Naples in the Campania region of Italy, in the territory of the comune of Pompei. Pompeii, along with Herculaneum and many villas in the surrounding area was buried under 4 to 6 m of volcanic ash and pumice in the eruption of Mount Vesuvius in AD 79. Largely preserved under the ash, the excavated city offers a unique snapshot of Roman life, frozen at the moment it was buried.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g187786-d195477-Reviews-Pompeii_Archaeological_Area-Pompeii_Province_of_Naples_Campania.html",
      image:"https://media-cdn.tripadvisor.com/media/photo-s/15/00/e1/17/ruins-of-pompeii-mt-vesuvius.jpg"
    },
    {
      coords:{lat:34.5595,lng:112.4679},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/blu-stars.png",
      title:"Longmen Grottoes",
      description:"Over 1,400 caves filled with over 100,000 statues make up Longmen Grottoes, also known as the Longmen Caves. Some of the statues are only one inch tall, while the largest Buddha statue measures 57 feet tall. The caves have been numbered sequentially from north to south along the west bank of the Yi River.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g303731-d1567326-Reviews-Longmen_Grottoes-Luoyang_Henan.html",
      image:"http://lh5.ggpht.com/-tO-p3PxYmUc/VJGuKlKZf_I/AAAAAAAA90o/x0DBpd_iZ5s/longmen-grottoes-8%25255B6%25255D.jpg?imgmax=800"
    },
    {
      coords:{lat:-22.9519,lng:-43.2105},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/red-stars.png",
      title:"Christ the Redeemer",
      description:"Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa. A symbol of Christianity across the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil, and is listed as one of the new 7 wonders of the world.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g303506-d554128-Reviews-Corcovado_Christ_the_Redeemer-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html",
      image:"https://cdn.britannica.com/54/150754-120-F5A7474C.jpg"
    },
    {
      coords:{lat:40.6892,lng:-74.0445},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/red-stars.png",
      title:"Statue of Liberty",
      description:"The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g60763-d103887-Reviews-Statue_of_Liberty-New_York_City_New_York.html",
      image:"https://media-cdn.tripadvisor.com/media/photo-s/11/4b/77/f7/statue-of-liberty-and.jpg"
    },
    {
      coords:{lat:41.4036,lng:2.1744},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/red-stars.png",
      title:"Basilica of the Sagrada Familia",
      description:"The Basilica of the Sagrada Familia is a monumental church devoted to the Holy Family: Jesus, Mary and Joseph. Construction began in 1882, based on plans drawn up by the architect Francisco de Paula del Villar, and Antoni Gaudi was commissioned to continue the project in 1883.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g187497-d190166-Reviews-Basilica_of_the_Sagrada_Familia-Barcelona_Catalonia.html",
      image:"https://www.livingtours.com/media/catalog/product/cache/2/image/830x545/17f82f742ffe127f42dca9de82fb58b1/s/a/sagrada-familia-cathedral-tour.jpg"
    },
    {
      coords:{lat:29.9792,lng:31.1342},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/red-stars.png",
      title:"The Great Pyramid of Giza",
      description:"The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g294202-d308887-Reviews-Great_Pyramid_of_Cheops_Khufu-Giza_Giza_Governorate.html",
      image:"https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza-and%20camels-2.jpg"
    },
    {
      coords:{lat:41.9022,lng:12.4539},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/red-stars.png",
      title:"St. Peter's Basilica",
      description:"Arguably one of the finest Cathedrals in the entire world, St. Peter's is the spiritual center of the Vatican and the product of many of Italy's great Renaissance's architects, among them Bramante, Raphael and Michelangelo.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g187793-d631111-Reviews-St_Peter_s_Basilica-Vatican_City_Lazio.html",
      image:"https://www.rometoolkit.com/Images/xvatican_stpeters2.jpg.pagespeed.ic.tI-6rxoUYV.jpg",
    },
    {
      coords:{lat:53.5587,lng:108.1650},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/grn-stars.png",
      title:"Lake Baikal",
      description:"It’s the world’s largest freshwater lake by volume, holding a fifth of the world’s unfrozen fresh water. Plus, at more than a mile deep in some places, it’s the world’s deepest lake. And, at 25 million years old, it is considered the world’s oldest lake. Thousands of kinds of flora and fauna, some found only here, call Lake Baikal home.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g298523-d307739-Reviews-Lake_Baikal-Siberian_District.html",
      image:"https://images.theconversation.com/files/252656/original/file-20190107-32133-6lq46u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
    },
    {
      coords:{lat:27.1750,lng:78.0422},
      iconImage:"http://maps.google.com/mapfiles/kml/paddle/red-stars.png",
      title:"Taj Mahal",
      description:"The Taj Mahal, meaning 'Crown of the Palaces' is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
      link:"https://www.tripadvisor.co.uk/Attraction_Review-g297683-d317329-Reviews-Taj_Mahal-Agra_Agra_District_Uttar_Pradesh.html",
      image:"https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/5588/SITours/private-tour-day-trip-to-agra-from-delhi-including-taj-mahal-and-agra-in-delhi-149788.jpg",
    },
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
       "'target='_blank'>Click here to see more about this destination on TripAdvisor!</a>" +
       "<img class='popupimage' src='"+ props.image +"'></div>"

    });

    // Add listener for when a marker is clicked on
    marker.addListener('click', function(){
      infowindow.open(map, marker);
    });
    addDestinationToList(props, infowindow, marker)



  }

}
