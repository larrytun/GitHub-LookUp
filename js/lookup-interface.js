var lookUp = require('./../js/lookup.js').lookUpModule;


var repoNumber = function(userName, repoData) {
  $('.display').text("The user name is " + userName + " and they have " + repoData + " public repositories:");
}

$(document).ready(function() {
  var currentUser = new lookUp();
  $('#searchButton').click(function() {
    $(".repoDisplay").empty();
    var userName = $('#persona').val();
    $('#persona').val("");
    currentUser.getInfo(userName,repoNumber);
  });
});
