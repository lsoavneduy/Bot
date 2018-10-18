const discord = require('discord.js');
const client = new discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

//const fs = require("fs");
//client.msgs = require("./msgs.json");


client.on("ready", () => {
    console.log("Bot Working :D");

    client.user.setActivity("Developed By lsoavneduy :3");
});

client.on("message", (message) => {

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    newCommand = command.toLowerCase();
    let args = message.content.split(" ").slice(1);

    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {

        if (newcommand === "help") {
            message.reply("Here Are The Command :3 \n !CNMB->help \n !CNMB->hello \n !CNMB->Rubbish @Username \n !CNMB->promoteExtra @Username \n !CNMB->promoteMember @Username");
        }

        if (newcommand === "hello") {
            message.reply("Hello :3");
        }

        if (newcommand === "rubbish") {
            let target = message.guild.member(message.mentions.users.first());
            if (target.id === '206003875092627456')
                message.channel.send("No! I disagree with you. " + target + " is a Handsome People :3");
            else
                message.channel.send("Yeah! I agree with you. " + target + " is a Rubbish :3");
        }

        if (newcommand === "promotemxtra") {
            let role = message.guild.roles.find('id', '485478021327880232');
            let target = message.guild.member(message.mentions.users.first());
            target.addRole(role).then(member => {
                message.reply("Done :3").catch(console.error);
            });
        }

        if (newcommand === "promotemember") {
            if (message.member.roles.find('id', '485478723840245761')) {
                let role = message.guild.roles.find('id', '485477125042864138');
                let target = message.guild.member(message.mentions.users.first());
                target.addRole(role).then(member => {
                    message.reply("Done :3").catch(console.error);
                });
            }
            else {
                message.reply("You Don't Have Permission To Do That :3").catch(console.error);
            }
        }
    }
});

client.on('guildMemberAdd', member => {
    client.channels.get("496640081331748864").send("Welcome" + member.toString() + "To This Discord Server :3");
    client.channels.get("496671228023537674").send(member.toString() + "You Can Enter (!CNMB->GetExtra) To Get Your First Permission In This Channel After 10mins :3");
});

client.login(token);

{
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
}