const Discord = require('discord.js')

var url, value, icon_url, inline;

exports.run = async (client, message, args, config) => {
    // just copy & paste it in here.
    //to funcionando perfeitinho meu bom!
    message.delete()

    let embedADM = new Discord.MessageEmbed()
        .setAuthor(name = 'Ajuda para Moderadores', icon_url = 'https://cdn.discordapp.com/attachments/679065189101862935/744362576225501194/help-512.webp')
        .addField(name = '$ping', value = 'Retorna o Ping.', inline = false)
        .addField(name = '$saldo [usuário]', value = 'Visualize suas finanças.', inline = false)
        .addField(name = '$minerar', value = 'Minere um pouco de Repúblicoins diariamente.', inline = false)
        .addField(name = '$pagar [usuário] [quantia]', value = 'Pague a alguém alguma quantia em Repúblicoin', inline = false)
        .addField(name = '$loja', value = 'Acesse a loja', inline = false)
        .addField(name = '$comprar [nome do item]', value = 'Compre algo da loja', inline = false)
        .addField(name = '$rankup', value = 'Compre uma promoção de cargo', inline = false)
        .setThumbnail(url = 'https://cdn.discordapp.com/attachments/274021598720425985/744359689252503612/xsaasx.png')
        .setColor("BLUE") // random = "RANDOM"
        .setTimestamp()

    let embed = new Discord.MessageEmbed()
        .setAuthor(name = 'Ajuda', icon_url = 'https://cdn.discordapp.com/attachments/679065189101862935/744362576225501194/help-512.webp')
        .addField(name = '$ping', value = 'Retorna o Ping.', inline = false)
        .addField(name = '$saldo [usuário]', value = 'Visualize suas finanças.', inline = false)
        .addField(name = '$minerar', value = 'Minere um pouco de Repúblicoins diariamente.', inline = false)
        .addField(name = '$pagar [usuário] [quantia]', value = 'Pague a alguém alguma quantia em Repúblicoin', inline = false)
        .addField(name = '$loja', value = 'Acesse a loja', inline = false)
        .addField(name = '$comprar [nome do item]', value = 'Compre algo da loja', inline = false)
        .addField(name = '$rankup', value = 'Compre uma promoção de cargo', inline = false)
        .setThumbnail(url = 'https://cdn.discordapp.com/attachments/274021598720425985/744359689252503612/xsaasx.png')
        .setColor("BLUE") // random = "RANDOM"
        .setTimestamp()

    if (!message.member.hasPermission('ADMINISTRATOR')) { // ver se o cara pode
        return message.channel.send(embed).then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 15000);
        })
    } else {
        return message.channel.send(embedADM).then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 15000);
        })
    }
}