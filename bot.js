const discord = require("discord.js");
const Discord = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Client({ disableEveryone: true });
client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  client.user.setGame("For Golden Eagle" , "https://www.twitch.tv/ninja");

});
client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  var argresult = message.content.split(` `).slice(1).join(' ');   
    if(cmd === `!!`){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("only Golden Eagle :yum:");
    message.channel.send(argresult);
    return;
    }    
    
});
client.login("NTI5OTMwMjc2MjYwOTM3NzM4.DxJVEQ.ZXytIT2h_gZNd_Xh0UEh8q3dw9k");