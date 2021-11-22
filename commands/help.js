const config = require("../config.json");
const Discord = require("discord.js");


module.exports = {
  name: "help", // Command Name.
  aliases: ["h"], // Aliases.
  usage: " ", // Usage.
  cooldown: 5, // Cooldown In Seconds.
  guildOnly: false, // If Command In DMs. (true/false)
  admin: false, // Bot Admin Only. (true/false)
  async execute(message, args, client) {    
      let prefix = config.prefix
    
    const credits = new Discord.MessageEmbed()
    .setAuthor(`Down Development`, message.guild.iconURL())
    .setDescription(`This bot was made by \`ItsNoah#3408\` who sponsors and owns Down Development. Please join our server. Also check out where you can find the open source code of this bot. @ https://github.com/TheDevNoah/v13-command-handler `)
      
      
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    .setTitle(`${message.author.tag} | Help Menu!`)
    .setDescription('My Prefix Is: `'+`${config.prefix}`+'`')
    .addField(`General commands:`, `${prefix}help - Shows all the commands you can use!\n${prefix}ban - Bans a User from the Server.\n${prefix}kick - Kicks a User from the Server.\n${prefix}lock - Locks the current channel.\n${prefix}unlock - Unlocks the current channel.\n${prefix}slowmode - Sets the channels slowmode.`)
    .setFooter('Made with ❤️ By: ItsNoah#3408')
    message.channel.send({ embeds: [credits, embed] })
    
  }
};
