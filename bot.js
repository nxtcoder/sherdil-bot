require('dotenv').config();

const Discord = require('discord.js')
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
})

const PREFIX = "~"
const ROLEA = "role+"
const ROLER = "role-"

client.on("messageDelete", msg => {
    msg.channel.send("Delete = Bad")
})

client.on("message", msg => {
    if (msg.content === `${PREFIX}`+"untag") {
        msg.channel.send("untagged")
}
    if (msg.content === `${PREFIX}`+"reply") {
         msg.reply("replied")
}
    if(msg.content == "react"){
    msg.react("❤")
}
    if (msg.content === `${PREFIX}${ROLEA}`) {
    addRole(msg.member)
}
    if (msg.content === `${PREFIX}${ROLER}`) {
    removeRole(msg.member)
}
})

function addRole(member){
    member.roles.add("951359019245764608")  
}

function removeRole(member){
    member.roles.remove("951359019245764608")  
}

client.login(process.env.BOT_TOKEN);
