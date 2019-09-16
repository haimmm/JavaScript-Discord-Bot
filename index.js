const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjIwNTk4NTM5NjM0MDgxNzkz.XXZJLg.2hgmY-z9840aiv6_NUuwIUOiwZk';
const prefix = '!';
const ytdl = require("ytdL-core");
const baladog = "219527193200427008";
const balabot = "620598539634081793";
const delay = new Set();

bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");

    if(args[0] === 'join'){
        message.reply("i'm working");            
    }
}) 

bot.login(process.env.BOT_TOKEN);
