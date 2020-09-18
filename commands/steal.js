const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`money_${user.id}`) // fetch mentioned users balance
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance


    if (!user) {
        return message.channel.send('faltou mencionar o sortudo.')
    }

    if (targetuser < 0) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`:x: ${user.user.username} é pobre de mais pô.`)
    }


    let random = Math.floor(Math.random() * 200) + 1; // stackoverflow se der merda volta la


    let embed = new Discord.RichEmbed()
    .setDescription(`${message.author} tu bafou ${user} e conseguiu ${random}<:republicoin:677290442307665971>!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)


    db.subtract(`money_${user.id}`, random)
    db.add(`money_${message.author.id}`, random)
}