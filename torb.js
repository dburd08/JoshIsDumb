var torbQuote1 = 'quotes/Torbjörn_-_Torbjorn_Ready_to_Work.ogg';
var torbQuote3 = 'quotes/Torbjörn_-_Molten_Core!.ogg';
var torbQuote4 = 'quotes/Torbjörn_-_Come_get_your_armor.ogg';
var torbQuotes =[torbQuote1, torbQuote3, torbQuote4];

exports.torbQuotes = function(message){
    var voiceChannel = message.member.voiceChannel;
    if (!voiceChannel){
      return "not in voice channel";
    }
    voiceChannel.join()
     .then(connection => {
       const dispatcher = connection.playFile(torbQuotes[Math.floor(Math.random()*torbQuotes.length)]);
       dispatcher.on('finish',() => {
         console.log("done");
       });
       dispatcher.on("end", end => {
         voiceChannel.leave();
       });
     })
     .catch(err => console.log(err));
   }
