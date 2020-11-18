function loadJSON(){ //Hosted JSON in Github
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
  }

  /*
function appendData(data){
  var nameContainer = document.getElementById("name");
  var servingsContainer = document.getElementById("");
  var timeContainer = document.getElementById("");
  var descriptionContainer = document.getElementById("");
  
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = data[i].name;
                nameContainer.appendChild(div);
}
}*/
