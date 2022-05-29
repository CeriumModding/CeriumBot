module.exports = {
    name: 'aes',
    description: "Gets AES keys",
    execute(message, args) {
        let server = message.guild.id
        if(server != "971466390303289434") {
            message.channel.send("Please refrain from using the Cerium Discord Bot in other discord servers. Please join https://discord.gg/A2Y3WZd3Ss")
        }
        else {
            const { MessageAttachment } = require("discord.js");
        // gets AES keys locally and sends it
        const file = new MessageAttachment("./jsons/aes.json");
        message.channel.send(file); 
        }
    }
}