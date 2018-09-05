var request = require('request');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('spellList.json', 'utf8'));
//var spellList = require('./spellList.json');
//var parsedList = JSON.parse(spellList);

exports.getSpell = function(name){
  var spellURL = spellUrl(name);
  var myPromise = getDetails(spellURL)
  myPromise.then(function(data){
    return data;
  });
  //var parsedDetails = JSON.parse(spellDescription, 'utf8');
}

function getDetails(url){
  const options = {
    url: url,
    method: 'GET',
    json: true
  };
  return new Promise (function (resolve, reject){
    request(options, function (error,response,body){
      if (!error && response.statusCode == 200) {
        //console.log(body);
        //console.log(JSON.parse(jsonObj));
        resolve(body);
      }else{
        reject(error);
      }
    });
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
