const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports={
    data:new SlashCommandBuilder().setName('ping_pelota').setDescription("Te saludara"),
    async execute(interaction){
        await interaction.reply('Pong Pelota!');
    },
};