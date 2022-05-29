module.exports = {
    name: 'weapon',
    description: "Gives Weapon ID",
    execute(message, args) {
        let server = message.guild.id
        if(server != "971466390303289434") {
            message.channel.send("Please refrain from using the Cerium Discord Bot in other discord servers. Please join https://discord.gg/A2Y3WZd3Ss")
        } else {
        const { MessageEmbed, MessageAttachment } = require('discord.js');
        const blueprints = require('../jsons/weapon.json');
        const WeaponName = message.content.slice(7).trim();

        // Results Function
        function GiveResults(Weapon, Rarity, ID, Image, RarityColor) {
            // Rarity Color Detection
            if(Rarity == "Common") {
                RarityColor = "#808080"
            } else if(Rarity == "Uncommon") {
                RarityColor = "#00FF00"
            } else if(Rarity == "Rare") {
                RarityColor = "#6495ED"
            } else if(Rarity == "Epic") {
                RarityColor = "#A020F0"
            } else if(Rarity == "Legendary") {
                RarityColor = "#FFD700"
            }
            // Embed Creation
            const ItemEmbed = new MessageEmbed()
            .setColor(RarityColor)
            .setTitle(Weapon)
            .addFields(
                {name: 'Name', value: Weapon},
                {name: 'Rarity', value: Rarity},
                {name: 'ID', value: ID},
                {name: 'Command', value: '`cheatscript loadpickup ' + ID + '`'}
            )
            .setThumbnail(Image);
            message.channel.send(ItemEmbed);
        }

        // AR
        if(WeaponName == "assault rifle common") {
            GiveResults("Assault Rifle", "Common", blueprints.AR_Grey, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/c/cf/New_AR_icon.png/revision/latest/scale-to-width-down/256?cb=20200714014130');
        }
        else if(WeaponName == "assault rifle uncommon") {
            GiveResults("Assault Rifle", "Uncommon", blueprints.AR_Green, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/c/cf/New_AR_icon.png/revision/latest/scale-to-width-down/256?cb=20200714014130');
        }
        else if(WeaponName == "assault rifle rare") {
            GiveResults("Assault Rifle", "Rare", blueprints.AR_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/c/cf/New_AR_icon.png/revision/latest/scale-to-width-down/256?cb=20200714014130');
        }
        else if(WeaponName == "assault rifle epic") {
            GiveResults("Assault Rifle", "Epic", blueprints.AR_Purple, 'https://static.wikia.nocookie.net/fortnite/images/e/ec/Assault_Rifle_%28High_Level%29_-_Weapon_-_Fortnite.png/revision/latest?cb=20210226220245');
        }
        else if(WeaponName == "assault rifle legendary") {
            GiveResults("Assault Rifle", "Legendary", blueprints.AR_Gold, 'https://static.wikia.nocookie.net/fortnite/images/e/ec/Assault_Rifle_%28High_Level%29_-_Weapon_-_Fortnite.png/revision/latest?cb=20210226220245');
        }

        // Burst AR
        else if(WeaponName == "burst assault rifle common") {
            GiveResults("Burst Assault Rifle", "Common", blueprints.BAR_Grey, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/8/8e/Burst_AR_battle_royale_gif.gif/revision/latest?cb=20200513183556');
        }
        else if(WeaponName == "burst assault rifle uncommon") {
            GiveResults("Burst Assault Rifle", "Uncommon", blueprints.BAR_Green, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/8/8e/Burst_AR_battle_royale_gif.gif/revision/latest?cb=20200513183556');
        }
        else if(WeaponName == "burst assault rifle rare") {
            GiveResults("Burst Assault Rifle", "Rare", blueprints.BAR_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/8/8e/Burst_AR_battle_royale_gif.gif/revision/latest?cb=20200513183556');
        }
        else if(WeaponName == "burst assault rifle epic") {
            GiveResults("Burst Assault Rifle", "Epic", blueprints.BAR_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/8/8e/Burst_AR_battle_royale_gif.gif/revision/latest?cb=20200513183556');
        }
        else if(WeaponName == "burst assault rifle legendary") {
            GiveResults("Burst Assault Rifle", "Legendary", blueprints.BAR_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/8/8e/Burst_AR_battle_royale_gif.gif/revision/latest?cb=20200513183556');
        }

        // Supressed Scar
        else if(WeaponName == "suppressed assault rifle epic") {
            GiveResults("Suppressed Assault Rifle", "Epic", blueprints.SAR_Purple, 'https://static.wikia.nocookie.net/fortnite/images/d/d7/Suppressed_Assault_Rifle_-_Weapon_-_Fortnite.png/revision/latest?cb=20180912162045');
        }
        else if(WeaponName == "suppressed assault rifle legendary") {
            GiveResults("Suppressed Assault Rifle", "Legendary", blueprints.SAR_Gold, 'https://static.wikia.nocookie.net/fortnite/images/d/d7/Suppressed_Assault_Rifle_-_Weapon_-_Fortnite.png/revision/latest?cb=20180912162045');
        }

        // Thermal AR
        else if(WeaponName == "thermal assault rifle epic") {
            GiveResults("Thermal Assault Rifle", "Epic", blueprints.TAR_Purple, 'https://static.wikia.nocookie.net/fortnite/images/4/4b/Thermal_Scoped_Assault_Rifle_-_Weapon_-_Fortnite.png/revision/latest?cb=20220320142503');
        }
        else if(WeaponName == "thermal assault rifle legendary") {
            GiveResults("Thermal Assault Rifle", "Legendary", blueprints.TAR_Gold, 'https://static.wikia.nocookie.net/fortnite/images/4/4b/Thermal_Scoped_Assault_Rifle_-_Weapon_-_Fortnite.png/revision/latest?cb=20220320142503');
        }

        // Infantry Rifle
        else if(WeaponName == "infantry rifle common") {
            GiveResults("Infantry Rifle", "Common", blueprints.IR_Grey, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/0/03/InfantryRifle.png/revision/latest?cb=20190223165637');
        }
        else if(WeaponName == "infantry rifle uncommon") {
            GiveResults("Infantry Rifle", "Uncommon", blueprints.IR_Green, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/0/03/InfantryRifle.png/revision/latest?cb=20190223165637');
        }
        else if(WeaponName == "infantry rifle rare") {
            GiveResults("Infantry Rifle", "Rare", blueprints.IR_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/0/03/InfantryRifle.png/revision/latest?cb=20190223165637');
        }

        // Heavy AR
        else if(WeaponName == "heavy assault rifle rare") {
            GiveResults("Heavy Assault Rifle", "Rare", blueprints.HAR_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/5/52/Heavy_Assault_Rifle.gif/revision/latest?cb=20200402110647');
        }
        else if(WeaponName == "heavy assault rifle epic") {
            GiveResults("Heavy Assault Rifle", "Epic", blueprints.HAR_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/5/52/Heavy_Assault_Rifle.gif/revision/latest?cb=20200402110647');
        }
        else if(WeaponName == "heavy assault rifle legendary") {
            GiveResults("Heavy Assault Rifle", "Legendary", blueprints.HAR_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/5/52/Heavy_Assault_Rifle.gif/revision/latest?cb=20200402110647');
        }

        // LMG
        else if(WeaponName == "lmg rare") {
            GiveResults("Light Machine Gun", "Rare", blueprints.LMG_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/d/da/HackSAW_icon.png/revision/latest?cb=20180507163029');
        }
        else if(WeaponName == "lmg epic") {
            GiveResults("Light Machine Gun", "Epic", blueprints.LMG_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/d/da/HackSAW_icon.png/revision/latest?cb=20180507163029');
        }

        // Tactical AR
        else if(WeaponName == "tactical assault rifle rare") {
            GiveResults("Tactical Assault Rifle", "Rare", blueprints.TACTICALAR_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/2/2b/Tac-ar.png/revision/latest?cb=20190515004042');
        }
        else if(WeaponName == "tactical assault rifle epic") {
            GiveResults("Tactical Assault Rifle", "Epic", blueprints.TACTICALAR_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/2/2b/Tac-ar.png/revision/latest?cb=20190515004042');
        }
        else if(WeaponName == "tactical assault rifle legendary") {
            GiveResults("Tactical Assault Rifle", "Legendary", blueprints.TACTICALAR_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/2/2b/Tac-ar.png/revision/latest?cb=20190515004042');
        }

        // Pump Shotgun
        else if(WeaponName == "pump shotgun common") {
            GiveResults("Pump Shotgun", "Common", blueprints.PUMP_Grey, 'https://static.wikia.nocookie.net/fortnite/images/c/ca/Pump_Shotgun_-_Weapon_-_Fortnite.png/revision/latest?cb=20210125015717');
        }
        else if(WeaponName == "pump shotgun uncommon") {
            GiveResults("Pump Shotgun", "Uncommon", blueprints.PUMP_Green, 'https://static.wikia.nocookie.net/fortnite/images/c/ca/Pump_Shotgun_-_Weapon_-_Fortnite.png/revision/latest?cb=20210125015717');
        }
        else if(WeaponName == "pump shotgun rare") {
            GiveResults("Pump Shotgun", "Rare", blueprints.PUMP_Blue, 'https://static.wikia.nocookie.net/fortnite/images/c/ca/Pump_Shotgun_-_Weapon_-_Fortnite.png/revision/latest?cb=20210125015717');
        }
        else if(WeaponName == "pump shotgun epic") {
            GiveResults("Pump Shotgun", "Epic", blueprints.PUMP_Purple, 'https://static.wikia.nocookie.net/fortnite/images/6/64/Pump_Shotgun_%28High_Tier%29_-_Weapon_-_Fortnite.png/revision/latest?cb=20210128185701');
        }
        else if(WeaponName == "pump shotgun legendary") {
            GiveResults("Pump Shotgun", "Legendary", blueprints.PUMP_Gold, 'https://static.wikia.nocookie.net/fortnite/images/6/64/Pump_Shotgun_%28High_Tier%29_-_Weapon_-_Fortnite.png/revision/latest?cb=20210128185701');
        }

        // Tactical Shotgun
        else if(WeaponName == "tactical shotgun common") {
            GiveResults("Tactical Shotgun", "Common", blueprints.TSG_Grey, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/7/78/Tac_shot_icon.png/revision/latest/scale-to-width-down/256?cb=20200225233606');
        }
        else if(WeaponName == "tactical shotgun uncommon") {
            GiveResults("Tactical Shotgun", "Uncommon", blueprints.TSG_Green, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/7/78/Tac_shot_icon.png/revision/latest/scale-to-width-down/256?cb=20200225233606');
        }
        else if(WeaponName == "tactical shotgun rare") {
            GiveResults("Tactical Shotgun", "Rare", blueprints.TSG_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/7/78/Tac_shot_icon.png/revision/latest/scale-to-width-down/256?cb=20200225233606');
        }
        else if(WeaponName == "tactical shotgun epic") {
            GiveResults("Tactical Shotgun", "Epic", blueprints.TSG_PurpleNEW, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/7/78/Tactical_shotgun_legendary.png/revision/latest?cb=20200831192447');
        }
        else if(WeaponName == "tactical shotgun legendary") {
            GiveResults("Tactical Shotgun", "Legendary", blueprints.TSG_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/7/78/Tactical_shotgun_legendary.png/revision/latest?cb=20200831192447');
        }

        // Heavy Shotgun
        else if(WeaponName == "heavy shotgun epic") {
            GiveResults("Heavy Shotgun", "Epic", blueprints.HSG_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/a/a4/Heavy_Shotgun.png/revision/latest?cb=20180523130120');
        }
        else if(WeaponName == "heavy shotgun legendary") {
            GiveResults("Heavy Shotgun", "Legendary", blueprints.HSG_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/a/a4/Heavy_Shotgun.png/revision/latest?cb=20180523130120');
        }

        // Combat Shotgun
        else if(WeaponName == "combat shotgun rare") {
            GiveResults("Combat Shotgun", "Rare", blueprints.CSG_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/7/70/Combatshotgun.png/revision/latest?cb=20200705214655');
        }
        else if(WeaponName == "combat shotgun epic") {
            GiveResults("Combat Shotgun", "Epic", blueprints.CSG_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/7/70/Combatshotgun.png/revision/latest?cb=20200705214655');
        }
        else if(WeaponName == "combat shotgun legendary") {
            GiveResults("Combat Shotgun", "Legendary", blueprints.CSG_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/7/70/Combatshotgun.png/revision/latest?cb=20200705214655');
        }

        // Drum Shotgun
        else if(WeaponName == "drum shotgun common") {
            GiveResults("Drum Shotgun", "Common", blueprints.DSG_Grey, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/3/36/Drum-Shotgun.png.png/revision/latest?cb=20190620171927');
        }
        else if(WeaponName == "drum shotgun uncommon") {
            GiveResults("Drum Shotgun", "Uncommon", blueprints.DSG_Green, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/3/36/Drum-Shotgun.png.png/revision/latest?cb=20190620171927');
        }
        else if(WeaponName == "drum shotgun rare") {
            GiveResults("Drum Shotgun", "Rare", blueprints.DSG_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/3/36/Drum-Shotgun.png.png/revision/latest?cb=20190620171927');
        }

        // Dragon Breath Shotgun
        else if(WeaponName == "dragon breath shotgun epic") {
            GiveResults("Dragon Breath Shotgun", "Epic", blueprints.DBSG_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/4/46/1606913314007.png/revision/latest?cb=20210321155304');
        }
        else if(WeaponName == "dragon breath shotgun legendary") {
            GiveResults("Dragon Breath Shotgun", "Legendary", blueprints.DBSG_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/4/46/1606913314007.png/revision/latest?cb=20210321155304');
        }

        // Double Barrel Shotgun
        else if(WeaponName == "double barrel shotgun epic") {
            GiveResults("Double Barrel Shotgun", "Epic", blueprints.DOUBLE_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/8/8d/Double-barreled_shotgun_icon.png/revision/latest?cb=20180531022958');
        }
        else if(WeaponName == "double barrel shotgun legendary") {
            GiveResults("Double Barrel Shotgun", "Legendary", blueprints.DOUBLE_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/8/8d/Double-barreled_shotgun_icon.png/revision/latest?cb=20180531022958');
        }

        // Break Action Shotgun
        else if(WeaponName == "break action shotgun epic") {
            GiveResults("Break Action Shotgun", "Epic", blueprints.BASG_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/8/8d/Double-barreled_shotgun_icon.png/revision/latest?cb=20180531022958');
        }
        else if(WeaponName == "break action shotgun legendary") {
            GiveResults("Break Action Shotgun", "Legendary", blueprints.BASG_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/8/8d/Double-barreled_shotgun_icon.png/revision/latest?cb=20180531022958');
        }

        // Bolt Action Sniper
        else if(WeaponName == "bolt action sniper rare") {
            GiveResults("Bolt Action Sniper", "Rare", blueprints.BAS_Blue, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/2/22/Bolt_action_sniper_rifle_battle_royale_gif.gif/revision/latest?cb=20200513181714');
        }
        else if(WeaponName == "bolt action sniper epic") {
            GiveResults("Bolt Action Sniper", "Epic", blueprints.BAS_Purple, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/2/22/Bolt_action_sniper_rifle_battle_royale_gif.gif/revision/latest?cb=20200513181714');
        }
        else if(WeaponName == "bolt action sniper legendary") {
            GiveResults("Bolt Action Sniper", "Legendary", blueprints.BAS_Gold, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/2/22/Bolt_action_sniper_rifle_battle_royale_gif.gif/revision/latest?cb=20200513181714');
        }

        // Special Items
        else if(WeaponName == "jetpack") {
            GiveResults("JetPack", "Legendary", blueprints.JETPACK, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/e/e1/Jetpack_icon.png/revision/latest?cb=20180522122320');
        }
        else if(WeaponName == "infinity gauntlet") {
            GiveResults("Infinity Gauntlet", "Legendary", blueprints.THANOS, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/1/1b/ThanosInfinityGauntlet.png/revision/latest?cb=20180508152036');
        }

        // Regular Items
        else if (WeaponName == "launch pad") {
            GiveResults("Launch Pad", "Epic", blueprints.LAUNCHPAD, 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/f/f1/Launch_Pad.png/revision/latest?cb=20180310120742')
        }
        
    
    
    
    }
        
    }
}