require('dotenv').config();
const { Client, Intents } = require('discord.js');



const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix="/";

client.on("message",function(message){
    if(message.author.bot)return; //comprueba si el mensaje enviado es un bot
    if(!message.content.startsWith(prefix))return; //comprueba si la linea que esta ejecutando sea con el prefijo mencionado anteriormente

    const commandBody=message.content.slice(prefix.length);//Del mensaje saca el /

    //console.log("commandBody-", commandBody);
    
    const args=commandBody.split(' ');//separa el mensaje en un array siendo el ' ' el separador de cada uno
    
    //console.log("args-", args);
    
    const command=args.shift().toLowerCase(); //Elimina el elemento 0, retornando ese dato, los otros datos cambian de posicion

    if(command=="hola"){
        message.reply("Hola!");
    }

})

client.login(process.env.BOT_TOKEN);





