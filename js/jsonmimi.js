var mediajson = {"media": [
    {
      "id": 623534343,
      "photographerId": 243,
      "alt" : "Travel Lonesome",
      "image": "Travel_Lonesome.jpg",
      "tags": ["travel"],
      "likes": 88,
      "date": "2019-02-03",
      "price": 45
    },
    {
      "id": 625025343,
      "photographerId": 243,
      "alt" : "Travel Hills de Color",
      "image": "Travel_HillsideColor.jpg",
      "tags": ["travel"],
      "likes": 85,
      "date": "2019-04-03",
      "price": 45
    },
    {
      "id": 2525345343,
      "photographerId": 243,
      "alt" : "Portrait It is Wednesday",
      "image": "Portrait_Wednesday.jpg",
      "tags": ["portait"],
      "likes": 34,
      "date": "2019-04-07",
      "price": 45
    },
    {
      "id": 2523434634,
      "photographerId": 243,
      "alt" : "Portrait A Woman Called Nora",
      "image": "Portrait_Nora.jpg",
      "tags": ["portait"],
      "likes": 63,
      "date": "2019-04-07",
      "price": 45
    },
    {
      "id": 2523434634,
      "photographerId": 243,
      "alt" : "Portrait Background",
      "image": "Portrait_Background.jpg",
      "tags": ["portait"],
      "likes": 55,
      "date": "2019-06-20",
      "price": 45
    },
    {
      "id": 2534342,
      "photographerId": 243,
      "alt" : "Event Sea Side Wedding",
      "image": "Event_SeasideWedding.jpg",
      "tags": ["events"],
      "likes": 25,
      "date": "2019-06-21",
      "price": 45
    },
    {
      "id": 65235234,
      "photographerId": 243,
      "alt" : "Event Pinto Wedding",
      "image": "Event_PintoWedding.jpg",
      "tags": ["events"],
      "likes": 52,
      "date": "2019-06-25",
      "price": 45
    },
    {
      "id": 23523434,
      "photographerId": 243,
      "alt" : "Event Benevides Wedding",
      "image": "Event_BenevidesWedding.jpg",
      "tags": ["events"],
      "likes": 77,
      "date": "2019-06-28",
      "price": 45
    },
    {
      "id": 5234343,
      "photographerId": 243,
      "alt" : "Animals Wild Horses In The Mountains",
      "video": "Animals_Wild_Horses_in_the_mountains.mp4",
      "tags": ["animals"],
      "likes": 142,
      "date": "2019-08-23",
      "price": 60
    },
    {
      "id": 95234343,
      "photographerId": 243,
      "alt" : "Animals Rainbow",
      "image": "Animals_Rainbow.jpg.jpg",
      "tags": ["animals"],
      "likes": 59,
      "date": "2019-07-02",
      "price": 60
    }
]};

//Javascript  to populate html with JSON


 var json, x 
 json= {"photographers": [
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
    }
  ]};

  //Javascript  to populate html with JSON TOP
  var h3 = document.getElementsByClassName('monoId');
  var city = document.getElementsByClassName('monoLocation');
  var description = document.getElementsByClassName('monoDescription');
  var rate = document.getElementsByClassName('columnRate')
  var totalLikes = document.getElementsByClassName('columnNumer');
  var taggies = document.getElementsByClassName('hashOne');
  var taggiesII = document.getElementsByClassName('hashTwo');
  var taggiesIII = document.getElementsByClassName('hashThree');
  var taggiesIV = document.getElementsByClassName('hashFour');
  var photographers = json.photographers;
  for(var i = 0; i < photographers.length; i++) {    
    h3[i].innerHTML = photographers[i].name;
    city[i].innerHTML = photographers[i].city;  
    description[i].innerHTML = photographers[i].tagline;
    taggies[i].innerHTML = "#" + photographers[i].tags[0];
    taggiesII[i].innerHTML = "#" + photographers[i].tags[1];
    taggiesIII[i].innerHTML = "#" + photographers[i].tags[2];
    taggiesIV[i].innerHTML = "#" + photographers[i].tags[3];
    rate[i].innerHTML = photographers[i].price + "$";
    totalLikes[i].innerHTML = "297 081" + ' <i class="fas fa-heart" aria-hidden="true"></i>';
  }

  
 //Populate sections
 var cDescription = document.getElementsByClassName("colName");
 var cPrice = document.getElementsByClassName("colPrice");
 var cLike = document.getElementsByClassName("colLike");
 var cCaption = document.getElementsByClassName("caption");
 var  media = mediajson.media;
 for(var i = 0; i < media.length; i++) {    
  cDescription[i].innerHTML = media[i].alt;
  cPrice [i].innerHTML = media[i].price + "$";  
  cLike[i].innerHTML = media[i].likes + ' <i class="fas fa-heart" aria-hidden="true"></i>';
  cCaption [i].innerHTML = media[i].alt;
   
}  


 //Populate tags
 
 