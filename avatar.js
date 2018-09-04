var avatar = 'quotes/fireNation.mp3';


exports.avatar = function(message){
  var voiceChannel = message.member.voiceChannel;
  if (!voiceChannel){
    return "not in voice channel";
  }
  voiceChannel.join()
   .then(connection => {
     const dispatcher = connection.playFile(avatar);
     dispatcher.on('finish',() => {
       console.log("done");
     });
     dispatcher.on("end", end => {
       voiceChannel.leave();
     });
   })
   .catch(err => console.log(err));
 }
