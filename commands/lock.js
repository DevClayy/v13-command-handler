const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = {
  name: "lock-channel", // Command Name
  aliases: ["clock"], // Aliases
  usage: " ", // Usage
  cooldown: 0, // Cooldown In Seconds
  guildOnly:// If Command In DMs return
  admin: false, // Bot Admin only
  async execute(message, args, client) {     false, 
      let prefix = config.prefix
      
      
   if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("**`[-> You don't have the permission to preform this action! <-]`**");

     const type = message.channel.type === 'text' ? 'SEND_MESSAGES' : 'CONNECT';
message.channel.overwritePermissions([
  {
     id: message.guild.roles.everyone,
     deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
  },
]);
    return message.reply(`Channel Locked, ${message.author.tag}`)
  /* If you want a embed use this and replace "return message.reply(`Channel Locked, ${message.author.tag}`)" with the following:
  
  
  const success = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail(message.guild.iconURL())
  .setDescription(`<#${message.channel.id}> has been locked by <@${message.author.id}> !`)
  .setFooter(`Made by: ItsNoah#3408`)
  message.reply({ embeds: [success] })
 message.react('✅');
  
  */

  
  
  }
}
