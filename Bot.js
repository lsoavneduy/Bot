const discord = require('discord.js');
const client = new discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

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

    if (message.content.startsWith("Fuck") || message.content.startsWith("fuck")) {
        message.channel.send("Fuck You Too");
    }

    if (message.content.startsWith("GetPermission")) {
        message.member.addRole(message.guild.roles.find('id', '485478021327880232'));
        if (message.member.roles.find('id', '485478021327880232'))
            message.channel.send("Now you have the permrission :3");
    }

    if (message.content.startsWith("TsChFa")) {
        message.author.id = "312990661156667393";
        message.channel.send(message.author + " Just a totally rubbish :3");
    }

    if (command === "promote") {
        let member = message.mentions.members.first();
        member.addRole(message.guild.roles.find('id', '502386713092423680'));
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