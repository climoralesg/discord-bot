require('dotenv').config();
const axios=require('axios').default;

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix="/";

const lang="es";
const unit="metric";

client.on("message",function(message){
    if(message.author.bot)return; //comprueba si el mensaje enviado es un bot
    if(!message.content.startsWith(prefix))return; //comprueba si la linea que esta ejecutando sea con el prefijo mencionado anteriormente

    const commandBody=message.content.slice(prefix.length);//Del mensaje saca el /
    
    const args=commandBody.split(' ');//separa el mensaje en un array siendo el ' ' el separador de cada uno
    
    const command=args.shift().toLowerCase(); //Elimina el elemento 0, retornando ese dato, los otros datos cambian de posicion


    if(command!=""){
        
        if(command=="temperatura"){
            axios({
                method:'get',
                url:'https://api.openweathermap.org/data/2.5/weather?',

                responseType:'json',
                
                params:{
                    q:args[0],
                    lang:lang,
                    units:unit,
                    appid:process.env.API_TOKEN_OPENWEATHER
                }
               
            }).then(function(response){
                console.log(response.data.main.temp);
                message.reply(`La temperatura de ${args[0]} es de ${response.data.main.temp} °C`);
            })
        
        }
        
        
        /*
        axios({
            method:'get',
            url:'https://pokeapi.co/api/v2/pokemon/'+command,
            responseType:'json'

        }).then(function(response){
            message.reply(response.data.sprites.front_default);
        });
        */
    }
    /*
    if(command=="hola"){
        message.reply("Hola!");
    }
    */

})

client.login(process.env.API_TOKEN_DISCORD);





