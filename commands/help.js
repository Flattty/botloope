const Discord = require('discord.js')
const { prefix } = require('../config.json')

module.exports.run = async (client, message, args) => {
  
message.delete();
message.reply('Check Dm\'s')

  const helpEmbed = new Discord.MessageEmbed()
        .setTitle('Help')
        .setColor('RANDOM')
        .setDescription('My commands')
        .addField(`${prefix}say (message)`, `Says what you wants it to say`)
        .addField(`${prefix}memes`, `posts a meme from https://reddit.com/r/memes`)
        .addField(`${prefix}ban (user) (reason)`, `Bans the member`)
        .addField(`${prefix}kick (user) (reason)`, `Kicks the member`)
        .addField(`${prefix}mute (user) (time)`, `Mutes the user (unmute does not work yet)`)
        .addField(`${prefix}warn (user) (reason)`, `Warns the user`)
        .addField(`${prefix}ping`, `Test command`)
        .addField(`${prefix}reload (command)`, `deletes the cache and resets the code`)
        .setFooter('Made by flat')
        .setTimestamp()

        message.author.send(helpEmbed);
};
