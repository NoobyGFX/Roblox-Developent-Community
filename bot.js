const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.og('I am ready!');
    });
    client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong')
       }
   });
 
 // DONT EDIT
 client.login(process.env.BOT_TOKEN);
