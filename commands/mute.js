
const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const ms = require('ms')
const db = require('quick.db')

module.exports = {
  name: "mute", // Command Name
  description: "List all of my commands/info about a specific command.", // Description
  aliases: ["mu"], // Aliases
  usage: "<user>", // Usage
  cooldown: 0, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  async execute(message, args, client) {



    

        const member = message.mentions.members.first();
        let time = args[1];
        const reason = args.slice(2).join(' ');
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        if (!member) return message.reply('Mention a user!');
        if (!time) return message.reply('Tell a time! (`mute <@user> <time> <reason>`) ');
        if (!reason) return message.reply('Tell me a reason (`mute <@user> <time> <reason>`)');

        if (member.id === message.author.id) return message.reply('You cant mute yourself!')
        if (member.id === client.id) return message.reply('You cant mute me!')

        if (!role) {
            try {
                message.channel.send('I could not locate a Muted Role. **`[-> Creating one... <-]`** ')
                let muterole = await message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        permissions: [],
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send(
                    new MessageEmbed()
                    .setDescription('Muted role has sucessfully been created')
                    .setColor("GREEN")
                )
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(role => role.name === 'Muted')
        if (member.roles.cache.has(role2)) return message.reply('User is already muted! ')

        if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply('You cant mute this user')


        await member.roles.add(role2)

                 const embed11 = new MessageEmbed()
                .setColor("RED")
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .setDescription(`<@${member.id}> Was muted for ${reason} by <@${message.author.id}> !`)
                .setTimestamp();

        message.reply({ embeds: [embed11] })

        setTimeout(() => {

              member.send(`**\`You have been Unmuted in ${message.guild.name}\`** `)



            member.roles.remove(role2)
        }, ms(time))

 


}
