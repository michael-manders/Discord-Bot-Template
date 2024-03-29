const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
    name: "logs",
    description: "Logs a deleted and edited message.",
    async execute (message, client, deleted) {
        if (message.author.bot) return;
        if (client.excused.includes(message.author.id)) {
            const index = client.excused.indexOf(message.author.id);
            if (index > -1) {
                client.excused.splice(index, 1);
            };
            return;
        }
        const { guild } = message
        const id = JSON.parse(fs.readFileSync('./supplementaryFiles/logChannels.json', 'utf-8'))[guild.id];

        if (!id) return;

        const channel = client.guilds.cache.get(guild.id).channels.cache.get(id);

        if (deleted) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Message Deleted")
                .addField("**Author:**", '<@' + message.author.id + '>', true)
                .addField("**Content:**", message.content, true)
                .addField("**Channel:**", '<#' + message.channel.id + '>', true)
                .setColor(client.color)
            channel.send(embed);
        }
        else {
            let editTo = await message.channel.messages.fetch(message.id);
            const embed = new Discord.MessageEmbed()
                .setTitle("Edited Message")
                .addField("**Author:**", '<@' + message.author.id + '>', true)
                .addField("**Edited From:**", message.content, true)
                .addField("**Edited To:**", editTo, true)
                .addField("**Channel:**", '<#' + message.channel.id + '>')
                .setColor(client.color)
            channel.send(embed);
        }

    }
} 
