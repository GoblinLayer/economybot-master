const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {
    // just copy & paste it in here.

    if (!message.member.hasPermission('ADMINISTRATOR')) { // ver se o cara pode
        return message.channels.send('Vc não é adm, nem tente de novo.').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2500);
        })
    }

    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, Artur deixe de ser besta e faça isso direito.`) // se o primeiro treco dps do args 0 nao for numero reclama

    if (db.fetch(`money_${message.guild.id}_${message.author.id}`) >= args[0]) db.subtract(`money_${message.guild.id}_${message.author.id}`, args[0]) // Tira da pessoa no db
    else {
        message.channel.send("A pessoa nao tem dinheiro")
        return;
    }


    let embed = new Discord.MessageEmbed()
        .setAuthor(`Republicoins removidos!`, message.author.displayAvatarURL)
        .addField(`Quantia retirada:`, `${args[0]}<:republicoin:677290442307665971>`)
        //.addField(`Saldo reformulado:`, `${cash}:republicoin:`)
        .setColor("RED") // random = "RANDOM"
        .setTimestamp()

    message.delete()
    
    message.channel.send(embed).then(msg => {
        setTimeout(() => {
            msg.delete()
        }, 5000)
    })

}