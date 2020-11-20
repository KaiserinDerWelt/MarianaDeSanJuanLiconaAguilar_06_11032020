/*function loadJSON(){ //Hosted JSON in Github
    fetch('https://kaiserinderwelt.github.io/MarianaDeSanJuanLiconaAguilar_06_11032020/json/FishEyeData.json')
    .then(function (response) {
      return response.json();//Getting Json set as parameter
    })
    .then(function (data) {
      appendData(data); //It will append the data to HTML
    })
      .catch(function (err) {
        console.log(err);
    });
  }*/


  var div = document.getElementsByClassName("card")[0],
      h3 = div.getElementsByTagName('h3'),
      city = div.getElementsByClassName('location'),
      description = div.getElementsByClassName('description'),
      rate = div.getElementsByClassName('rate'),
      data = {
         "photographers": [
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
  ]
    };
    data.photographers.forEach(function(v, i) {
      h3[i].innerHTML = v.name;
      city[i].innerHTML = v.city;
      description[i].innerHTML = v.tagline;
      rate[i].innerHTML = "$" + v.price + "/day";
  });
