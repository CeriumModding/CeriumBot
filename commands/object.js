// Please use the GiveResults() Function. DO NOT USE OUR OLD METHOD
module.exports = {
    name: 'object',
    decription: "Gives path to objects",
    execute(message, args, Discord) {
        let server = message.guild.id
        if(server != "971466390303289434") {
            message.channel.send("Please refrain from using the Cerium Discord Bot in other discord servers. Please join https://discord.gg/A2Y3WZd3Ss")
        }
        else {
            const { MessageEmbed, MessageAttachment } = require('discord.js');
        const blueprints = require('../jsons/bp.json');
        const SayMessage = message.content.slice(7).trim();

        // Epic Function
        function GiveResults(Name, Path, Despawns, Command, Image)
        {
            const ItemEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(Name)
            .addFields(
                { name: 'Name', value: Name },
                { name: 'Path', value: "`" + Path + "`"},
                { name: 'Despawns', value: Despawns},
                { name: 'Command', value: '`cheatscript loadobject ' + Command + '`'},
            )
            .setImage(Image);
            message.channel.send(ItemEmbed);
        }

        // New exciting handler
        if(SayMessage == "lars van") {
            GiveResults(blueprints.lars_name, blueprints.lars_path, blueprints.lars_despawns, blueprints.lars_path, 'https://media.discordapp.net/attachments/973912253554360390/973912323213365348/larsvan.jpg?width=960&height=540');
        } else if(SayMessage == "storm shield") {
            GiveResults(blueprints.stormshield_name, blueprints.stormchest_path, blueprints.stormshield_despawns, blueprints.stormshield_path, 'https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2017/07/27/Fortnite-how-to-increase-homebase-power-level_feature.jpg');
        } else if(SayMessage == "storm chest") {
            GiveResults(blueprints.stormchest_name, blueprints.stormchest_path, blueprints.stormchest_despawns, blueprints.stormchest_path, 'https://static.wikia.nocookie.net/fortnite/images/3/3d/Storm_Chest_-_Locked_-_Fortnite.jpg/revision/latest?cb=20211201072445');
        } else if(SayMessage == "gliding") {
            GiveResults(blueprints.gliding_name, blueprints.gliding_path, blueprints.gliding_despawns, blueprints.gliding_path, 'https://progameguides.com/wp-content/uploads/2020/02/fortnite-outfit-agent-peely-ghost.jpg');
        } else if(SayMessage == "radar tower hologram") {
            GiveResults(blueprints.radar_name, blueprints.radar_path, blueprints.radar_despawns, blueprints.radar_path, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/5/5a/Radar_tower_blueprint_1.png/revision/latest/scale-to-width-down/1200?cb=20180314091536');
        } else if(SayMessage == "bluglo") {
            GiveResults(blueprints.bluglo_name, blueprints.bluglo_path, blueprints.bluglo_despawns, blueprints.bluglo_path, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/b/bd/Bluglo_icon.png/revision/latest/scale-to-width-down/1200?cb=20190624155404');
        } else {
            message.channel.send("WHOOPS! This item is not available in our database yet. If you have the item path please send it to array0x#0001 to be added to the database");
        }
        }
        
    }
}