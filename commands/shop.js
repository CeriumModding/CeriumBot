module.exportts = {
    name: 'shop',
    description: "gives latest item shop",
    execute(message, args) {
        let server = message.guild.id
        if(server != "971466390303289434") {
            message.channel.send("Please refrain from using the Cerium Discord Bot in other discord servers. Please join https://discord.gg/A2Y3WZd3Ss")
        }
        else {
            // trims message to get args
        const SayMessage = message.content.slice(4).trim();

        // option handler
        if(SayMessage == "raw") {
            // RAW DATA
            const file = new MessageAttachment("../jsons/shop.json");
            message.channel.send(file);
        } else if(SayMessage == "image") {
            // COMING SOON
        } else {
            message.channel.send("Whoops! That is not a option, type in `!shop raw` or `!shop image` to get results")
        }
        }
    }
}