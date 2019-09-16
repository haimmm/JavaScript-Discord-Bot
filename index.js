    const Discord = require('discord.js');
    const bot = new Discord.Client();
    const token = 'NjIwNTk4NTM5NjM0MDgxNzkz.XYAeQg.nD0PJJDWVLbUWi7HWA3l99xOpFA';
    const prefix = '!';

    bot.on('ready', () =>{
        console.log('This bot is online!');
    })
    
    bot.on('message', message=>{
        let args = message.content.substring(prefix.length).split(" ");
    
        if(args[0] === 'join'){
            message.reply("i'm working");            
        
        
             const channel = bot.channels.get("618149617464508431");
             if (!channel) return console.error("The channel does not exist!");

             channel.join().then(connection => {
                   message.reply("entered vc");
                //   const dispatcher = connection.playFile('music.mp3'); // PLAY FROM LOCAL FILE
                //  dispatcher.on("end", function(){
                   //   connection.disconnect(); // DC AFTER
                  }); 
             }).catch(e => {
                  console.error(e);
            }); 
         }
    }) 

bot.login(process.env.BOT_TOKEN);
