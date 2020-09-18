const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {



    let user = message.mentions.members.first() 

    let member = db.fetch(`money_${message.author.id}`)

    //caso usuario burro
    if (!user) {
        return message.channel.send('Precisa dar um @ na pessoa pra pagar.')
    }
    if (!args[1]) {
        return message.channel.send('Faltou dizer quanto quer pagar corno.')
    }

    //caso usuario caloteiro
    if (message.content.includes('-')) {
        return message.channel.send('Achou q eu ia deixar essa passar?.')
    }

    if (member < args[1]) {
        return message.channel.send(`Pobre lenhado tu n pode dar mais do q vc tem.`)
    }

    let embed = new Discord.MessageEmbed()
    .setAuthor(`Pagamento feito com sucesso`, message.author.displayAvatarURL)
    .addField(`Dinheiro retidado de ${message.author.tag} - ${args[1]} republicoins:`)
    .addField(`Dinheiro transferido para ${user.user.username}$`)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embed);
    
    db.add(`money_${user.id}`, args[1])
    db.subtract(`money_${message.author.id}`, args[1])




}