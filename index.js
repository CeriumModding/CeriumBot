// Created by array0x (please check LICENSE for more information)
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const client = new Discord.Client();
const config = require('./configs/general/bot.json');
const express = require('express');
const app = express();
const port = config['web-port'];
const prefix = config.prefix;

// Simple Express (used for 24/7 repl host)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/larsvan', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/items/larsvan.jpg'));
})
  
app.listen(port, () => {
    console.log("epic pogger");
})

// --- Discord bot code starts here ---
client.commands = new Discord.Collection();

// Defining all commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

// Basic console log -_-
client.once("ready", () => {
    console.clear('');
    console.log("Welcome to Cerium");
    console.log("Port: " + config['web-port']);
    console.log("Prefix: " + config.prefix);
    console.log("Admin: " + config.admin);
    client.user.setPresence({ activity: { type: "PLAYING", name: "Cerium"}, status: "dnd"})
});

// Message handling
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Command handler (very basic but easy *i'll make a good one i swear*)
    if(command == 'map') {
        client.commands.get('map').execute(message, args, Discord);
    } else if (command == 'aes') {
        client.commands.get('aes').execute(message, args);
    } else if (command == 'playlist') {
        client.commands.get('playlist').execute(message, args);
    } else if (command == 'object') {
        client.commands.get('object').execute(message, args, Discord);
    } else if (command == 'weapon') {
        client.commands.get('weapon').execute(message, args, Discord);
    } else if (command == 'shop') {
        client.commands.get('shop').execute(message, args, Discord);
    } else {
        message.channel.send("That is not a command.");
    }

});

client.login(config.token);