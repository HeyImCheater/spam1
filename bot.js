const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Hassan_Gamer");


client.on("ready", () => {
let channel =     client.channels.get("553659620753670244")
setInterval(function() {
channel.send(`LOL`);
}, 25)
})
 
 
client.login("process.env.BOT_TOKEN");
