var request = require('request');

exports.getSpell = function(){
  request('http://dnd5eapi.co/api/spells', function (error,response,body){
    if (!error && response.statusCode == 200) {
      console.dir(body);
    }else{
      console.log(error);
      console.log(response);
    }
  })
}
