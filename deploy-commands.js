const fs=require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require("dotenv").config();

const commands=[];

const commandFiles=fs.readdirSync('./commands').filter(file=>file.endsWith('.js'));

console.log(commandFiles);

for(const file of commandFiles){
	console.log("File",file);
	const command=require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	console.log("Comando",commands);
}

const rest= new REST({ version: '9' }).setToken(process.env.API_TOKEN_DISCORD);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);