const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjIwNTk4NTM5NjM0MDgxNzkz.XYC1bw.pGVbo8ye9pZJvnFZFIC71uldsSI';
const prefix = '!';
//const ytdl = require("ytdL-core"); // Play from YouTube (took it off, able to play a .mp3 file)
const baladog = "248887685282922506";
const balabot = "620598539634081793";
const delay = new Set();




bot.on('ready', () =>{
    console.log('This bot is online!');
})

//implemented by entering vc
bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    function play(connection){
        const dispatcher = connection.playFile('music.mp3'); // PLAY FROM LOCAL FILE
         dispatcher.on("end", function(){
             connection.disconnect(); // leave vc AFTER
         });
     }

     if(delay.has(baladog)){ //exit when delay
        return;
    }
  

    if(newMember.id === baladog){
        if(oldUserChannel === undefined && newUserChannel !== undefined) { // baladog enter vc
            delay.add(baladog); // added to cd set
             //define ch
             var balaCH = newMember.voiceChannelID;
             const channel = bot.channels.get(balaCH);
             if (!channel) return console.error("The channel does not exist!");
             //connect & play
             channel.join().then(connection => { 
                 if(newUserChannel.members.has(balabot))
                    play(connection);
            }).catch(e => {
                console.error(e);     
            });

            
            setTimeout(()=>{
                delay.delete(baladog);
            },20000) // 2H cd


            }else if(newUserChannel === undefined){ // balagod leaves vc
                //nothing to imlement here (yet?)
            }
        }   
}) 

bot.login(process.env.BOT_TOKEN);
