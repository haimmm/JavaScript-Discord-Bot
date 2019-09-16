const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjIwNTk4NTM5NjM0MDgxNzkz.XX_exA.v-NtBsE3Q_64a0EmgQ3z0g3h41w';
const prefix = '!';
//const ytdl = require("ytdL-core");
const baladog = "219527193200427008";
const balabot = "620598539634081793";
const delay = new Set();

bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");

    if(args[0] === 'join'){
        message.reply("i'm working");            
    }
    
    const channel = bot.channels.get("618149617464508431");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
          message.reply("entered vc"); 
    }).catch(e => {
              console.error(e);
    }); 
}) 

bot.login(process.env.BOT_TOKEN);
