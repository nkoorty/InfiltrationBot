require('dotenv').config();

const fetch = require('node-fetch');
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', (message) => {
    console.log("Ready!");
});

client.on('message', async message => {
	if (message.member.voice.channel && message.content == "=dip") {
		message.member.voice.channel.join();
        message.guild.me.voice.setSelfMute(true);
        message.guild.me.voice.setSelfDeaf(true);
	} else if (!(message.member.voice.channel)&&(message.content == "=dip")) {
        message.channel.send("You need to be in call to use this command!");
    } 
});

client.on('message',  message => {
    if (message.content == "=help") {
        const embed = new MessageEmbed()
            .setTitle('Infiltration Alert')
            .setDescription('A person in your call has been infiltrated by Vishwas')
            .setColor('#d32256')
            .setImage('https://media-exp1.licdn.com/dms/image/C4D03AQEZcH5CkelbCQ/profile-displayphoto-shrink_200_200/0/1618803872271?e=1632960000&v=beta&t=V0q6ckDI1w06xiwhwer-DE2CbHM4FIE5dG1_LRmDE1I')
        message.author.send(embed);
    }
});

 