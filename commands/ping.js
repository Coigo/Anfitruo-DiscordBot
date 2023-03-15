const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Teste"),

        
    async execute(interaction) {
        const falas = [ 'ME RECUSO', 'NÃO' , 'PARA']
        let len = falas.length
        let ran = Math.floor(Math.random() * len)
        const Escolha = falas[ran]

        await interaction.reply(Escolha)
    }
}