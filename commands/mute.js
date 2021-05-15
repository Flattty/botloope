const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.channel.send("Please tag user to mute!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, you don't have permissions to use this!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cant mute this user");
  if (tomute.id === message.author.id) return message.channel.send("You cannot mute yourself!");
  const muterole = message.guild.roles.cache.find(role => role.name == "Muted");

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("You didn't specify a time!");

  await(tomute.roles.add(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.remove.role(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}
