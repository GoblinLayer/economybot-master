const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {



     
    let embed = new Discord.MessageEmbed()
    .setTitle(`Bem vindo a Republican-Store!`)
    .setDescription('**Use *buy <item> para comprar!**')
    .addField(`Moderator`, '`70000$`\nFaz de vc um Mod!')
    .addField(`Admin`, '`100000000000000$`\nFaz de vc um Admin!') // can add up to 25(I believe)
    .setColor("RANDOM") 

    message.channel.send(embed)



}