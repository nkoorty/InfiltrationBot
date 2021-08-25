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
    message.guild.me.voice.setSelfMute(true);
    message.guild.me.voice.setSelfDeaf(true);
	if (message.member.voice.channel && message.content == "=dip") {
		message.member.voice.channel.join();

        message.member.voice.channel.members.forEach((x) => {
            try {
                if (!(x.user.username === message.author.username)){
                const embed = new MessageEmbed()
                .setTitle('Infiltration Alert')
                .setDescription(`Hey, ${message.member} in your call has been infiltrated by Vishwas`)
                .setColor('#d32256')
                x.send(embed);
                } else {
                    x.voice.setMute(true);
                    x.voice.setDeaf(true);
                }
            } catch (err) {
           //let's catch, inform about error and log it
           message.channel.send("Something went wrong");
        }
        });

	} else if (!(message.member.voice.channel)&&(message.content == "=dip")) {
        message.reply("You need to be in a call to use this command!");
    } else if (message.member.voice.channel && message.content == "=m") {
        message.member.voice.channel.leave();
        message.member.voice.channel.members.forEach((x) => {
            if (!(x.user.username === message.author.username)) {
                const embed1 = new MessageEmbed()
                .setTitle('Infiltration Alert')
                .setDescription(`Hey, ${message.member} is no longer infiltrated`)
                .setColor('#d32256')
                x.send(embed1);
            } else {
                x.voice.setMute(false);
                x.voice.setDeaf(false);
            }
        });
    } else if (!(message.member.voice.channel)&&(message.content == "=m")) {
        message.reply("You need to be in a call to use this command!");
    }
})
