const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
});
const http = require("http");
const express = require("express");
const app = express();
const fs = require("graceful-fs");
const config = require("./config.json");

/*
 app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
*/

var server = require("http").createServer(app);
const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)

    })})
const db = require('quick.db')
 client.on('message', async message => {
const { PREFIX } = require('./config.json');
    let prefix;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        
            } catch {
            prefix = PREFIX
    }})

       // if (message.mentions.has(client.user.id) && !message.content.includes("Cypher") && !message.content.includes("*prefix")) {
      ///    message.channel.send('Hello! My command Prefix is: * to get started type *help\n> **Support Server: https://discord.gg/YAaJRewJ **');
    //      }})

client.on("guildCreate", (guild) => {

    console.log(client.user.username + " was invited to and joined " + guild.name);
});
const { readdirSync } = require("fs");
const { join } = require("path");
client.command = new Discord.Collection();
client.queue = new Map();


fs.readdir("./event", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./event/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();



client.on("message", message => {
  let prefix = config.prefix; 
 
    
  if (message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  if (command.guildOnly && message.channel.type !== "text") {
    return message.reply("I can't execute that command inside DMs!");
  }

  if (command.admin && !config.administrators.includes(message.author.id)) {
    return message.reply(`${message.author.tag} : **You must be an Administrator to use this Command!**`)
  }
   
  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }
  try {
    command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
  
client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
 
  )})})

client.login(config.token);
