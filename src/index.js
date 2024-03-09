require("dotenv").config();
const { Client, IntentsBitField, } = require("discord.js");
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});
const postiveResponses=["good luck life is okay","everything that you do is great dont make yourself unmotivated"]
client.once('ready', (c) => {
    console.log(`${c.user.tag} is online`);
    });
    client.once('messageCreate',(message)=>{
        if(message.author.bot){
            return;
        }
        if(message.content==="fuck you"){
            message.reply("you too")
        }
        if(message.content==="$inspire"){
            const randomIndex = Math.floor(Math.random() * postiveResponses.length);
            message.reply(postiveResponses[randomIndex]);
        }
        if(message.content[length-1]==message[length-1]){
            message.reply(message);
        }
   })
client.login(process.env.token)