module.exports = {
    name: 'map',
    description: "ratio",
    execute(message, args, Discord) {
        let server = message.guild.id
        if(server != "971466390303289434") {
            message.channel.send("Please refrain from using the Cerium Discord Bot in other discord servers. Please join https://discord.gg/A2Y3WZd3Ss")
        }
        else {
            // Gets the map locally and sends it in chat
        message.channel.send("Getting Map, please wait...");
        const { MessageAttachment } = require("discord.js");
        const file = new MessageAttachment("./images/maps/20.30.png");
        message.channel.send(file); 
        }
    }
}