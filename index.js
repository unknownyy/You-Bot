const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login('ODA3NjIwNDI5NzQ4NzY0Njk4.YB6pIw.7C8yiZmz44X9AlsJaxKV2Eb_W80');