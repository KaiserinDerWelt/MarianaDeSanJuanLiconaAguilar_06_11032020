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