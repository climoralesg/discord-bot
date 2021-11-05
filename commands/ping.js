const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports={
    data:new SlashCommandBuilder().setName('ping').setDescription("Respondera con un Pong!"),
    async execute(interaction){
        await interaction.reply('Pong!');
    },
};