const Discord = require('discord.js');

var count = 0; 
var Client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES

]});

Client.on('ready', () => {
  console.log("Je suis connecté !")
});

Client.on("messageCreate", function (message)  {
  if (message.content.endsWith('quoi') ) {
    console.log("feur")
    message.channel.send('feur')
    count = count +1; 
    console.log(count)
  }
})

Client.on("messageCreate", function (message)  {
  if (message.content.endsWith('quoi?') ) {
    console.log("feur")
    message.channel.send('feur')
  }
})

Client.on("messageCreate", function (message)  {
  if (message.content.endsWith('quoi ?') ) {
    console.log("feur")
    message.channel.send('feur')
  }
})


Client.on("messageCreate", function (message)  {
  if (message.content.endsWith('koi') ) {
    console.log("feur")
    message.channel.send('feur')
  }
})

Client.on("messageCreate", function (message)  {
  if (message.content.endsWith('koi?') ) {
    console.log("feur")
    message.channel.send('feur')
  }
})

Client.on("messageCreate", function (message)  {
  if (message.content.endsWith('koi ?') ) {
    console.log("feur")
    message.channel.send('feur')
  }
})

Client.on("messageCreate", function (message)  {
  if (message.content.endsWith('Quoi ?') ) {
    console.log("feur")
    message.channel.send('feur')
  }
})

Client.on("messageCreate", function (message)  {
  if (message.content.endsWith('Quoi?') ) {
    console.log("feur")
    message.channel.send('feur')
  }
})

Client.on("messageCreate", function (message)  {
  if (message.content.endsWith('Quoi') ) {
    console.log("feur")
    message.channel.send('feur')
  }
})



Client.login('');