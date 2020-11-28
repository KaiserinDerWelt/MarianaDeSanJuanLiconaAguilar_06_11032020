     var json = {"photographers": [
    {
      "name": "Mimi Keel",
      "id": 243,
      "alt" : "UK Photographer For Events",
      "city": "London",
      "country": "UK",
      "tags": ["portrait", "events", "travel", "animals"],
      "tagline": "Finding beauty in everyday things",
      "price": 400,
      "portrait": "MimiKeel.jpg"
    },
    {
      "name": "Ellie-Rose Wilkens",
      "id": 930,
      "alt" : "Paris Phorographer For Sports",
      "city": "Paris",
      "country": "France",
      "tags": ["sports", "architecture"],
      "tagline": "Capturing Complex Composition",
      "price": 250,
      "portrait": "EllieRoseWilkens.jpg"
    },
    {
      "name": "Tracy Galindo",
      "id": 82,
      "alt" : "Canada Fashion Fotographer",
      "city": "Montreal",
      "country": "Canada",
      "tags": ["art", "fashion", "events"],
      "tagline": "Freelance photographer",
      "price": 500,
      "portrait": "TracyGalindo.jpg"
    },
    {
      "name": "Nabeel Bradford",
      "id": 527,
      "alt" : "Mexico City Travel Fotographer",
      "city": "Mexico City",
      "country": "Mexico",
      "tags": ["travel", "portrait"],
      "tagline": "Always moving forward",
      "price": 350,
      "portrait": "NabeelBradford.jpg"
    },
    {
      "name": "Rhode Dubois",
      "id": 925,
      "alt" : "Spain Photographer for Sports and Fashion Events",
      "city": "Barcelona",
      "country": "Spain",
      "tags": ["sport", "fashion", "events", "animals"],
      "tagline": "Making memories",
      "price": 275,
      "portrait": "RhodeDubois.jpg"
    },
    {
      "name": "Marcel Nikolic",
      "id": 195,
      "alt" : "Berlin Travel Fotographer",
      "city": "Berlin",
      "country": "Germany",
      "tags": ["travel", "architecture"],
      "tagline": "Finding the next big photo",
      "price": 300,
      "portrait": "MarcelNikolic.jpg"
    }
  ]};
  //Javascript  to populate html index with JSON
  var h3 = document.getElementsByTagName('h3');
  var city = document.getElementsByClassName('location');
  var description = document.getElementsByClassName('description');
  var rate = document.getElementsByClassName('rate');
  var photographers = json.photographers;
  for(var i = 0; i < photographers.length; i++) {    
    h3[i].innerHTML = photographers[i].name;
    city[i].innerHTML = photographers[i].city;  
    description[i].innerHTML = photographers[i].tagline;
    rate [i].innerHTML = "$" + photographers[i].price +"/day";
    //tag1[i].innerHTML = "#" + photographers[i].tags[0];
  }  


 

  