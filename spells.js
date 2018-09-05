var request = require('request');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('spellList.json', 'utf8'));
//var spellList = require('./spellList.json');
//var parsedList = JSON.parse(spellList);

exports.getSpell = function(name){
  var spellURL = spellUrl(name);
  var spellDescription = getDetails(spellURL);
  console.log(spellDescription);
  //console.log(spellDescription);
  //var parsedDetails = JSON.parse(spellDescription, 'utf8');
  return "test success";
}

function getDetails(url){
  request(url, function (error,response,body){
  if (!error && response.statusCode == 200) {
    return JSON.parse(body);
  }else{
    console.log(error);
    console.log(response);
  }
});
}
function spellUrl(spellName){
  var i = null;
  var url = null;
  try{
    for (i = 0; obj.results.length > 1; i += 1){
        if (obj.results[i].name === spellName){
          url = obj.results[i].url;
          console.log("foundURL");
          return url;
      }
    }
  }
  catch(error){
    console.log("didnt find name");
    return "didnt find this spell";
  }
}

function modifyURLBody(body){

    delete body[id];
    return body;
}
