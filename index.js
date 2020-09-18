const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

//for new shit  discordapp.com/oauth2/authorize?=&client_id=666040276862763033&scope=bot&permissions=8
//client.ping; Bot's ping to discord
//user size = client.users.size
//Lembrar de deletar o json e os comandos bugados
//emote = <:republicoin:677290442307665971>

var num = 80;

var commandFile;

let prefix = config.prefix;

client.on('message', message => {

    //bot n pode dar comando
    if (message.author.bot) return;

    if (message.channel.type === 'dm') return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if (message.content.indexOf(config.prefix) !== 0) return;

    try {
        commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, config)
    } catch (err) {
        console.log("deu merdinha");
        return;
    }



})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity(`Descendo a porrada em vico e ${num} outros republicanos`);
})


client.login(config.token)