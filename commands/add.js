const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


    //checa permit
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('Vc é fraco, te falta ADM permissions.')
    }

    //caso usuario === estupido
    if (!args[0]) return message.reply(`, tu é burro por acaso? bota numero porra.`)

    if (isNaN(args[0])) return message.reply(`${message.author} Tem que ser numero caralho.`)

    //descobre quem ganha o dinheiro add dps || message.author
    let user = message.mentions.users.first() || message.author;

    //deixa bonito
    let embed = new Discord.MessageEmbed()
        .setAuthor(`Dinheiro adicionado`, message.author.displayAvatarURL)
        .addField(`Republicoins:`, `${args[0]}<:republicoin:677290442307665971>`)
        .setColor("GREEN")
        .setTimestamp()

    message.delete()

    message.channel.send(embed).then(msg => {
        setTimeout(() => {
            msg.delete()
        }, 5000);
    })

    message.channel.send(`Parabéns ${user} você recebeu ${args[0]} <:republicoin:677290442307665971>`).then(msg => {
        setTimeout(() => {
            msg.delete()
        }, 5000)
    })

    //adiciona a grana no DB baseado no server
    db.add(`money_${message.guild.id}_${user.id}`, args[0])

}