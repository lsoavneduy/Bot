const discord = require('discord.js');
const client = new discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

//const fs = require("fs");
//client.msgs = require("./msgs.json");


client.on("ready", () => {
    console.log("I'm ready!");

    client.user.setGame("Developed By lsoavneduy :3");
});

client.on("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith("Hello")) {
        message.channel.send("Hello :3");
    }

    if (message.content.startsWith("Fuck")) {
        message.channel.send("Fuck You Too");
    }

    if (message.content.startsWith("GetPermission")) {
        message.member.addRole(message.guild.roles.find('id', '485478021327880232'));
    }

    //    if (message.content.startsWith(prefix + "JJ")) {
    //        message.channel.send({ files: [""] });
    //    }

    /*
        if (message.content.startsWith(prefix + "Set")) {
            editedmessage = message.content.slice(9);
    
            client.msgs[message.author.username] = {
                message: editedmessage
            }
            fs.writeFile("./msgs.json", JSON.stringify(client.msgs, null, 4), err => {
                if (err) throw err;
                message.channel.send("Message Set!");
            });
        }
    
        if (message.content.startsWith(prefix + "Get")) {
            let _message = client.msgs[message.author.username].message;
            message.channel.send(_message);
        }
    */
    //Emoji
    /*
        if (message.content.toLowerCase() == "no" || message.content.toLowerCase() == "nope") {
            temp = message.content;
            message.delete();
            message.channel.send(temp, {
                files: [
                    "./Emoji/No.png"
                ]
            });
        }
    */


});

client.on('guildMemberAdd', member => {
    client.channels.get("485479920487628810").send("Welcome" + member.toString() + "To This Discord Server :3");
    client.channels.get("486519816752988161").send(member.toString() + "You Can Enter (GetPermission) To Get The Permission In This Channel After 10mins :3");
});

client.login(token);
