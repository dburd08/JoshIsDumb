var $ = require('jquery');
var request = require('request');
const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('./auth.json');
const token = auth.token;

var spells = require('./spells.js');
var overwatch = require('./overwatchModule.js');
var torb = require('./torb.js');
var naruto = require('./naruto.js');
var avatar = require('./avatar.js');
var badResponses = ["is bad at Overwatch", "is a scrub", "is bad at Smite"];
var goodResponses = ["is great", "is best D.Va", "is a Smite god" ];
var prefix = "~";
var isReady = "true";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  //troll
  if (message.content.startsWith(prefix + "josh") || message.content.startsWith(prefix + "kurt")) {
    var name = message.content.split("~")[1];
    message.channel.send(name + " " + badResponses[Math.floor(Math.random()*badResponses.length)], {tts: true});
  }
  if (message.content.startsWith(prefix + "derek")){
    var name = message.content.split("~")[1];
    message.channel.send(name + " " + goodResponses[Math.floor(Math.random()*goodResponses.length)], {tts: true});
  }

  if (isReady && message.content.startsWith(prefix + "avatar")) {
    isReady = "false";
    avatar.avatar(message);
    isReady = "true";
   }

  //torbquotes for braden
  if (isReady && message.content.startsWith(prefix + "braden")) {
    isReady = "false";
    torb.torbQuotes(message);
    isReady = "true";
   }
   //naruto quotes for josh
   if (isReady && message.content.startsWith(prefix + "naruto")) {
    if (message.content.split(" ").length > 1){
      var quote = message.content.split("naruto")[1];
      isReady = "false";
      naruto.quotes(message,quote);
      isReady = "true";
    }else{
      isReady = "false";
      naruto.naruto(message);
      isReady = "true";
    }
  }

  //overwatch
  if (message.content.startsWith(prefix + "overwatch")){
    if (message.content.split(" ").length > 1){
      var heroType = message.content.split("overwatch")[1];
      overwatch.heroPick(heroType);
     }else{
        message.channel.send(overwatch.heros[Math.floor(Math.random()*overwatch.heros.length)], {tts: true});
        }
    }
  if (message.content.startsWith(prefix + "spells") || message.content.startsWith(prefix + "spell")){
    if (message.content.split(" ").length >1){
      var name = message.content.substring(message.content.indexOf(" ")+1);
      message.channel.send(spells.getSpell(name));
    }else{
      message.channel.send("Thats not a spell name");
    }
  }
  //end of bot listening
});

client.login(token);
