require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Respondera con un pong'),
	new SlashCommandBuilder().setName('server').setDescription('Respondera con informacion del servidor'),
	new SlashCommandBuilder().setName('user').setDescription('Respondera con información del usuario'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.API_TOKEN_DISCORD);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);