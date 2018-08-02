const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = (".");

var prefix = (".");

bot.on("ready", () => {
  
  console.log("Salut"); 
  bot.user.setActivity(".help | NyXion")
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setAuthor("HELP", message.guild.iconURL)
        .setTitle("Commandes du NyXion BOT !")
        .addField(".help", "Affiche la liste des commandes du bot !")
        .setFooter("© </UltraDév'>")
        .setColor("0x6a9ccc")
        .setTimestamp()
        .setThumbnail(message.guild.iconURL)
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {
    
    if (message.content === prefix + "mcount") {
        var embed = new Discord.RichEmbed()
        .setAuthor("Membres", "https://cdn.discordapp.com/attachments/438419377335828491/449613403254685706/members.png")
        .setTitle(message.guild.memberCount)
        .setColor("0x6a9ccc")
    message.channel.sendEmbed(embed)
    }
  
    if (message.content === prefix + "membercount") {
        var embed = new Discord.RichEmbed()
        .setAuthor("Membres", "https://cdn.discordapp.com/attachments/438419377335828491/449613403254685706/members.png")
        .setTitle(message.guild.memberCount)
        .setColor("0x6a9ccc")
    message.channel.sendEmbed(embed)
    }
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "🔶bienvenue").send(`[-] ${member.user.name}`)
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🔶bienvenue").send(`[+] ${member.user.username}`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'NyXionniens');
    member.addRole(role)
})
