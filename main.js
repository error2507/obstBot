const Discord        = require('discord.js')
const fs             = require('fs')

const embed          = require('./embed')
const commands      = require('./commands')

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

var client = new Discord.Client()

client.login(config.token)

client.on('ready', () => {

    console.log(`Eingeloggt als ${client.user.username} ...`)
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);

    client.user.setGame(`` + config.botversion + ` | @obstBot - o!help - auf ${client.guilds.size} Servern mit ${client.users.size} Benutzern und ${client.channels.size} Kanälen online | by Rxsto`)

})

const COLORS = {

    red: 0xe74c3c,
    green: 0x27ae60,
    blue: 0x3498db,
    yellow: 0xf1c40f,
    violett: 0x8e44ad

}

const PRES = {

    "336944745714548737": "👑",
    "336944800546947072": "👔",
    "336953685433253898": "🚸",
    "399166908936486912": "👑🤖",
    "291289718220652544": "🤖"

}

var cmdmap = {

    info: commands.cmd_info,
    help: commands.cmd_help,
    game: commands.cmd_game,
    userinfo: commands.cmd_userinfo,
    ui: commands.cmd_userinfo,
    time: commands.cmd_time,
    embed: commands.cmd_embed,
    rate: commands.cmd_rate,
    stats: cmd_stats

}

client.on('message', (msg) => {
    if(msg.isMentioned(client.user)) {
        embed.emb(msg.channel, "Hey, ich bin Rxsto's obstBot, wenn du wissen möchtest, was ich alles kann, dann probier doch mal den Command `o!help` aus. Informationen über mich gibt es mit `o!info`. Viel Spaß!", "Rxsto's obstBot", COLORS.yellow)
    }

    var content = msg.content,
        author  = msg.member,
        channel = msg.channel,
        guild   = msg.guild

    if(msg.channel.type == "text" && content.startsWith(config.prefix)) {

        var invoke = content.split(' ')[0].substr(config.prefix.length),
        args   = content.split(' ').slice(1)
    
        if(invoke in cmdmap) {
            cmdmap[invoke](msg, args)
        }
        console.log('PASST')
    }
})

client.on('guildMemberAdd', (memb) => {
    var guild = memb.guild
    var role = guild.roles.find(r => r.id == '356437540305108992')
    if (role) {
        memb.addRole(role)
        memb.sendMessage('', new Discord.RichEmbed()
            .setColor(0x29B6F6)
            .setDescription('Du wurdest automatisch zum Mitglied ernannt.\nViel Spaß auf dem G Λ M i N G - C Ξ N T Ξ R!')
        )
    }
})

client.on('guildMemberUpdate', (mold, mnew) => {
    var guild = mnew.guild
    if (mold.roles.array().length < mnew.roles.array().length) {
        var role = mnew.roles.find(r => mold.roles.find(r2 => r2.id == r.id) == null)
        if (role.id in PRES)
            mnew.setNickname(`${PRES[role.id]} ${mnew.displayName}`)
    }
    else if (mold.roles.array().length > mnew.roles.array().length) {
        var role = mold.roles.find(r => mnew.roles.find(r2 => r2.id == r.id) == null)
        if (role.id in PRES)
            mnew.setNickname(mnew.displayName.substr(PRES[role.id].length + 1))
    }
})

client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setGame(`` + config.botversion + ` | @obstBot - o!help - auf ${client.guilds.size} Servern mit ${client.users.size} Benutzern und ${client.channels.size} Kanälen online | by Rxsto`);
});

client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setGame(`` + config.botversion + ` | @obstBot - o!help - auf ${client.guilds.size} Servern mit ${client.users.size} Benutzern und ${client.channels.size} Kanälen online | by Rxsto`);
});

// FUNCTIONS

function cmd_stats(msg, args) {
    var emb =  {
        embed: {
            color: COLORS.yellow,
            author: {
                name: "obstBot",
                icon_url: "https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/SWW6oiIjZj80dk6ky/storyblocks-apple-icon-flat-apple-icon-apple-vector_rKgyODyXyG_thumb.jpg"
            },
            timestamp: new Date(),
            fields: [
                {
                    name: "Server",
                    value: `${client.guilds.size}`,
                    inline: true
                },
                {
                    name: "User",
                    value: `${client.users.size}`,
                    inline: true
                },
                {
                    name: "Kanäle",
                    value: `${client.channels.size}`,
                    inline: true
                },
                {
                    name: "ID",
                    value: client.user.id,
                    inline: true
                },
                {
                    name: "Version",
                    value: config.botversion,
                    inline: true
                },
                {
                    name: "Autor",
                    value: "Rxsto (Oskar Lang)",
                    inline: true
                }
            ],
            footer: {
                text: "Coded by Rxsto",
                icon_url: "https://rxsto.github.io/images/rxsto.png"
            }        
        }
    }
    msg.channel.send('', emb)
}