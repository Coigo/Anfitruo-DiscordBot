const { getVoiceConnection } = require('@discordjs/voice');
const { SlashCommandBuilder } = require("discord.js");



module.exports = {
  data: new SlashCommandBuilder()
  .setName("play")
  .setDescription("Musiquinhaa"),
  
  async execute(interaction, client, args) {
    const connection = getVoiceConnection(interaction.guild.id);

  }
}