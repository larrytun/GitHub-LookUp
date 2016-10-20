var apiKey = require('./../.env').apiKey;

function lookUp(){
}

lookUp.prototype.getInfo = function(userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    displayFunction(userName, response.public_repos);
  })

  $.get('https://api.github.com/users/' + userName + '/repos?&per_page1000&access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){
      var description = (response[i].description);
      if (description === null) {
        description = "No description to show";
      }
      $('.repoDisplay').append('<div class="well"<br><li><div class="title">' + response[i].name + '</div>' + '<p>' + description + '</p></li></div>');
    }
  }).fail(function(error) {
    $('.display').text(error.resonseJSON.message);
  });
};


exports.lookUpModule = lookUp;
