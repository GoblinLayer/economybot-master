const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args,config) => {

    
    //puxa do db
    let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    //null handler pq tava dando erro
    if (bal === null) bal = 0;

    //cria o bagulho bonito
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Sua grana total é`, message.author.displayAvatarURL)
    .addField(`Republicoins:`, `${bal}<:republicoin:677290442307665971>`)
    .setColor("RANDOM")
    .setTimestamp()
    message.delete();
    message.channel.send(embed).then(msg=>{
        setTimeout(() => {
            msg.delete()
        }, 5000);
    });

}