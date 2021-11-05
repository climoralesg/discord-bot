require("dotenv").config();
const axios = require("axios").default;

const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  // Comprueba la conexión
  console.log("Hola! he vuelto");
});

const prefix = "/";

const lang = "es";
const unit = "metric";

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("has dado ping");
  }
  if(commandName==="server"){
    await interaction.reply(`Has dado a Server: ${interaction.guild.name}\n Creado el: ${interaction.guild.createdAt}`);
  }

  if(commandName==="user"){
    await interaction.reply(`Interaccion del usuario: ${interaction.user.tag}`);
  }
});
/*
client.on("message", function (message) {
  if (message.author.bot) return; //comprueba si el mensaje enviado es un bot
  if (!message.content.startsWith(prefix)) return; //comprueba si la linea que esta ejecutando sea con el prefijo mencionado anteriormente

  const commandBody = message.content.slice(prefix.length); //Del mensaje saca el /

  const args = commandBody.split(" "); //separa el mensaje en un array siendo el ' ' el separador de cada uno

  const command = args.shift().toLowerCase(); //Elimina el elemento 0, retornando ese dato, los otros datos cambian de posicion

  let comuna = args[0].charAt(0).toUpperCase() + args[0].slice(1);

  console.log("Comuna", comuna);

  if (command != "") {
    if (command == "temperatura") {
      axios({
        method: "get",
        url: "https://api.openweathermap.org/data/2.5/weather?",

        responseType: "json",

        params: {
          q: comuna,
          lang: lang,
          units: unit,
          appid: process.env.API_TOKEN_OPENWEATHER,
        },
      }).then(function (response) {
        console.log(response.data.main.temp);
        message.reply(
          `La temperatura de ${comuna} es de ${response.data.main.temp} °C`
        );
      });
    }
  }
});
*/
client.login(process.env.API_TOKEN_DISCORD);
