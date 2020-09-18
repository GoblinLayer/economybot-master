const Discord = require('discord.js');

module.exports.run = async (client, message, args,config) => {
	const m = await message.channel.send("Ping?");
	m.edit(`🏓Latency is API Latency is ${Math.round(client.ws.ping)}ms`);
	setTimeout(() => {
		m.delete()
	}, 5000);
}