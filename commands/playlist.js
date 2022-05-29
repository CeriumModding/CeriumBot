module.exports = {
    name: 'playlist',
    description: "Gets all Playlists",
    execute(message, args) {
        let server = message.guild.id
        if(server != "971466390303289434") {
            message.channel.send("Please refrain from using the Cerium Discord Bot in other discord servers. Please join https://discord.gg/A2Y3WZd3Ss")
        }
        else {
        // Playlist will be rewritten as just sending the file is unethical
        const { MessageAttachment } = require("discord.js");
        // Gets playlists locally and sends it in chat
        const file = new MessageAttachment("./jsons/playlists.json");
        message.channel.send(file); 
        }
    }
}