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
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);

    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
        if (command === "hello") {
            message.reply("Hello :3");
        }
        
        if (command === "promoteMember") {
            let role = message.guild.roles.find('id', '502529008458792960');
            let promoteMember = message.guild.member(message.mentions.users.first());
            promoteMember.addRole(role).then(member => {
                message.reply("Done :3").catch(console.error);
            });
        }
    }

    else {
        if (message.content.startsWith("Hello")) {
            message.channel.send("Hello :3");
        }

        if (message.content.startsWith("Fuck") || message.content.startsWith("fuck")) {
            message.channel.send("Fuck You Too");
        }

        if (message.content.startsWith("GetPermission")) {
            message.member.addRole(message.guild.roles.find('id', '485478021327880232'));
            message.channel.send("Done :3");
        }

        if (message.content.startsWith("TsChFa")) {
            message.author.id = "312990661156667393";
            message.channel.send(message.author + " Just a totally rubbish :3");
        }
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
    client.channels.get("496640081331748864").send("Welcome" + member.toString() + "To This Discord Server :3");
    client.channels.get("496671228023537674").send(member.toString() + "You Can Enter (GetPermission) To Get The Permission In This Channel After 10mins :3");
});

client.login(token);
