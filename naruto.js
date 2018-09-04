var believe = 'quotes/Naruto_believe_it.mp3';
var pain = 'quotes/Pain_This_world_shall_know_pain.mp3';
var madara = 'quotes/Madara_Allow_me_to_show_you.mp3';
var narutoQuotes = [believe, pain, madara];
exports.naruto = function(message){

  var voiceChannel = message.member.voiceChannel;
  if (!voiceChannel){
    return "not in voice channel";
  }
  voiceChannel.join()
   .then(connection => {
     const dispatcher = connection.playFile(narutoQuotes[Math.floor(Math.random()*narutoQuotes.length)]);
     dispatcher.on('finish',() => {
       console.log("done");
     });
     dispatcher.on("end", end => {
       voiceChannel.leave();
   });
 })
   .catch(err => console.log(err));
 }

 exports.quotes = function(message,quote){
   var voiceChannel = message.member.voiceChannel;
   if (!voiceChannel){
     return "not in voice channel";
   }
   voiceChannel.join()
    .then(connection => {
      if (quote == " believe"){
        const dispatcher = connection.playFile(believe);
        cleanup(dispatcher,voiceChannel);
      }else if (quote == " pain"){
        const dispatcher = connection.playFile(pain);
        cleanup(dispatcher,voiceChannel);
      }else if (quote == " despair"){
        const dispatcher = connection.playFile(madara);
        cleanup(dispatcher,voiceChannel);
      } else {
        voiceChannel.leave();
      }
    })
    .catch(err => console.log(err));
}

function cleanup (dispatcher,voiceChannel){
  dispatcher.on('finish',() => {
    console.log("done");
  });
  dispatcher.on("end", end => {
    voiceChannel.leave();
  });
}
