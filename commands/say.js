const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('dont have the permissions');
let botmessage = args.join(" ");
message.delete().catch();
message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
