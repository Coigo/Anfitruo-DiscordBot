const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("eu_poderia")
        .setDescription("Teste"),

async execute(interaction) {

        url = 'https://www.boredapi.com/api/activity'
        resposta = await fetch(url)
        euPoderia = await resposta.json()

        await interaction.reply(`You could... ${euPoderia['activity']}`)
    }
}
