var attackHeros = ["Doomfist", "Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Tracer"];
var defenseHeros = ["Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker"];
var tankHeros = ["D.Va", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya"];
var supportHeros = ["Ana", "Brigitte", "Lucio", "Mercy", "Moira", "Symmetra", "Zenyatta"];
var trollHeros= ["Bastion", "Torbjorn", "Symmetra"];
exports.heros = attackHeros.concat(defenseHeros).concat(tankHeros).concat(supportHeros);

exports.heroPick = function(heroType){
  if (heroType == " attack"){
        message.channel.send(attackHeros[Math.floor(Math.random()*attackHeros.length)], {tts: true});
  } else if (heroType == " defense") {
        message.channel.send(defenseHeros[Math.floor(Math.random()*defenseHeros.length)], {tts: true});
  } else if (heroType == " tank"){
        message.channel.send(tankHeros[Math.floor(Math.random()*tankHeros.length)], {tts: true});
  } else if (heroType == " support"){
        message.channel.send(supportHeros[Math.floor(Math.random()*supportHeros.length)], {tts: true});
  }else if (heroType == " troll"){
        message.channel.send(trollHeros[Math.floor(Math.random()*trollHeros.length)], {tts: true});
  }else{
      message.channel.send(heros[Math.floor(Math.random()*heros.length)], {tts: true});
      }
    }
