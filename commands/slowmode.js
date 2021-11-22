const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = {
  name: "slowmode", // Command Name
  description: "List all of my commands/info about a specific command.", // Description
  aliases: ["chanel-slowmode", "slowmode-set", "slm"], // Aliases
  usage: " ", // Usage
  cooldown: 0, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  async execute(message, args, client) {    
      let prefix = config.prefix

      
      
       const amount = parseInt(args[0]);
    if (message.member.hasPermission("MANAGE_CHANNELS"))
      if (isNaN(amount))
        return message.channel.send("You need to include a proper value, e.g. a time.");
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}s\` `)
        message.reply({embeds: [embed]});
        return;
      } else {
        const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}s\` `)

        message.reply({ embeds: [embed1] });
        return;
      }
    }
    if (args[0] === amount + "m") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
           const embed2 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}m\` `)

        
        message.reply(embed2)
        return;
      } else {
         const embed3 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}m\` `)

        
        message.reply({ embeds: [embed3] });

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
         const embed4 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}h\` `)

        
        message.reply({ embeds: [embed4] });
        return;
      } else {
         const embed5 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
        .setDescription(`Slowmode Updated! \`Slowmode was set to: ${amount}h\` `)

        
        message.reply({ embeds: [embed5] });
        return;
      }
    } else {
      message.reply(
        "You can only set seconds(s), minutes(min) and hours(h)"
      );
    }
  }
};
