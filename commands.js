const Discord        = require('discord.js')
const fs             = require('fs')
const ytdl           = require('ytdl-core')
const request        = require('request')
const ytinfo 		 = require('youtube-info')

const embed          = require('./embed')

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

const COLORS = {

    red: 0xe74c3c,
    green: 0x27ae60,
    blue: 0x3498db,
    yellow: 0xf1c40f,
    violett: 0x8e44ad

}

var currentvid = ""

module.exports = {
    cmd_info(msg, args) {

        var emb =  {
            embed: {
                color: COLORS.blue,
                thumbnail: {
                    url: "https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/SWW6oiIjZj80dk6ky/storyblocks-apple-icon-flat-apple-icon-apple-vector_rKgyODyXyG_thumb.jpg"
                },
                author: {
                    name: "obstBot",
                    icon_url: "https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/SWW6oiIjZj80dk6ky/storyblocks-apple-icon-flat-apple-icon-apple-vector_rKgyODyXyG_thumb.jpg"
                },
                timestamp: new Date(),
                fields: [
                    {
                        name: "obstBot - Info",
                        value: "Dies ist ein **Discord** **Bot** programmiert von **Rxsto.** Seine Aufgabe ist das Managen des Discord Servers **G Λ M i N G - C Ξ N T Ξ R.** Er wurde größtenteils in **Javascript** (node.js) programmiert. Die genutzte Library nennt sich discord.js.\n\n© **Rxsto Development** (Oskar Lang)",
                        inline: false
                    },
                    {
                        name: "Aktuelle Version",
                        value: config.botversion,
                        inline: false
                    },
                    {
                        name: "Developers GitHub",
                        value: "[Rxsto (Oskar Lang)](http://rxsto.github.io)",
                        inline: false
                    }
                ],
                footer: {
                    text: "Coded by Rxsto",
                    icon_url: "https://rxsto.github.io/images/rxsto.png"
                }

            }
        }
        msg.channel.send('', emb)        
    },

    cmd_help(msg, args) {
        var emb =  {
            embed: {
                color: COLORS.green,
                thumbnail: {
                    url: "https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/SWW6oiIjZj80dk6ky/storyblocks-apple-icon-flat-apple-icon-apple-vector_rKgyODyXyG_thumb.jpg"
                },
                author: {
                    name: "obstBot",
                    icon_url: "https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/SWW6oiIjZj80dk6ky/storyblocks-apple-icon-flat-apple-icon-apple-vector_rKgyODyXyG_thumb.jpg"
                },
                timestamp: new Date(),
                fields: [
                    {
                        name: "obstBot - Hilfe",
                        value: "Hier sind alle möglich Commands und Funktionen des obstBots aufgelistet.",
                        inline: false
                    },
                    {
                        name: "Commands",
                        value: "▫️ `o!help` - Zeigt diese Nachricht an\n▫️ `o!info` - Zeigt alle Informationen an\n▫️ `o!stats` - Zeigt die Stats des Bots an\n▫️ `o!play <Song-Titel>` - Spielt einen gewünschten Song\n▫️ `o!add / o!play` - Fügt einen Song zur Queue hinzu\n▫️ `o!skip` - Überspringt den derzeitigen Song\n▫️ `o!queue` - Zeigt alle derzeit vorhandenen IDs in der Queue\n▫️ `o!leave` - Lässt den Bot stoppen\n▫️ `o!game <Spiel-Name>` - Fügt ein Spiel hinzu\n▫️ `o!game list` - Zeigt alle verfügbaren Spiele an\n▫️ `o!time` - Zeigt die aktuelle Zeit an\n▫️ `o!userinfo` / `o!ui` - Zeigt alle Informationen des Users an"
                    }
                ],
                footer: {
                    text: "Coded by Rxsto",
                    icon_url: "https://rxsto.github.io/images/rxsto.png"
                }

            }
        }
        msg.channel.send('', emb)        
    },

    cmd_game(msg, args) {
        var memb = msg.member,
            game = args

        if(game == 'Minecraft') {
            memb.addRole('399168954913914890')
            msg.channel.send('Dir wurde erfolgreich das Game Minecraft hinzugefügt.')
        } else if(game == 'PUBG') {
            memb.addRole('399168995229433862')
            msg.channel.send('Dir wurde erfolgreich das Game PUBG hinzugefügt.')
        } else if(game == 'WoWs') {
            memb.addRole('399169160648851467')
            msg.channel.send('Dir wurde erfolgreich das Game World of Warships hinzugefügt.')
        } else if(game == 'Fortnite') {
            memb.addRole('399169224775434262')
            msg.channel.send('Dir wurde erfolgreich das Game Fortnite - Battle Royale hinzugefügt.')
        } else if(game == `Garry'sMod`) {
            memb.addRole('399169280198967306')
            msg.channel.send(`Dir wurde erfolgreich das Game Garry's Mod hinzugefügt.`)
        } else if(game == 'Paladins') {
            memb.addRole('399169728054165534')
            msg.channel.send('Dir wurde erfolgreich das Game Paladins hinzugefügt.')
        } else if(game == 'GTAV') {
            memb.addRole('399169796119199745')
            msg.channel.send('Dir wurde erfolgreich das Game GTA V hinzugefügt.')
        } else if(game == 'Overwatch') {
            memb.addRole('399169941263220746')
            msg.channel.send('Dir wurde erfolgreich das Game Overwatch hinzugefügt.')
        } else if(game == 'CS:GO') {
            memb.addRole('399169977732694018')
            msg.channel.send('Dir wurde erfolgreich das Game CS:GO hinzugefügt.')
        } else if(game == 'RocketLeague') {
            memb.addRole('399170009856737290')
            msg.channel.send('Dir wurde erfolgreich das Game Rocket League hinzugefügt.')
        } else if(game == `Rainbow'sSixSiege`) {
            memb.addRole('399170139838218240')
            msg.channel.send(`Dir wurde erfolgreich das Game Rainbow's Six Siege hinzugefügt.`)
        } else if(game == 'TeamFortress') {
            memb.addRole('399170048289144852')
            msg.channel.send('Dir wurde erfolgreich das Game Team Fortress hinzugefügt.')
        } else if(game == 'WarThunder') {
            memb.addRole('399170237037281290')
            msg.channel.send('Dir wurde erfolgreich das Game War Thunder hinzugefügt.')
        } else if(game == 'ARK:SurvivalEvolved') {
            memb.addRole('399170625253408770')
            msg.channel.send('Dir wurde erfolgreich das Game ARK: Survival Evolved hinzugefügt.')
        } else if(game == 'list') {            
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
                            name: "Games - Eine Liste aller möglichen Spiele",
                            value: "Hier kannst du nachschauen, welche Games auf diesem Server existieren.",
                            inline: false
                        },
                        {
                            name: "Games - In den Klammern stehen die Formen, die du hinter o!game angeben musst. (Falls nicht angegeben, Original-Form nutzen)",
                            value: "```Minecraft\nPUBG\nWorld of Warships (WoWs)\nFortnite\nGarry's Mod (Garry'sMod)\nPaladins\nGTA V (GTAV)\nOverwatch\nCS:GO\nRocket League (RocketLeague)\nRainbow's Six Siege (Rainbow'sSixSiege)\nTeam Fortress (TeamFortress)\nWar Thunder (WarThunder)\nARK: Survival Evolved (ARK:SurvivalEvolved)```"
                        }
                    ],
                    footer: {
                        text: "Coded by Rxsto",
                        icon_url: "https://rxsto.github.io/images/rxsto.png"
                    }
        
                }
            }
            msg.channel.send('', emb)
        } else {
            msg.channel.send('Dieses Spiel ist mir nicht bekannt!')
        }
    },

    cmd_userinfo(msg, args) {
        var emb =  {
            embed: {
                color: COLORS.yellow,
                thumbnail: {
                    url: msg.member.user.displayAvatarURL
                },
                author: {
                    name: "obstBot",
                    icon_url: "https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/SWW6oiIjZj80dk6ky/storyblocks-apple-icon-flat-apple-icon-apple-vector_rKgyODyXyG_thumb.jpg"
                },
                timestamp: new Date(),
                fields: [
                    {
                        name: "Name des Users",
                        value: msg.member.user.username,
                        inline: false
                    },
                    {
                        name: "Nickname des Users",
                        value: msg.member.displayName,
                        inline: false
                    },
                    {
                        name: "Beigetreten am",
                        value: msg.member.joinedAt,
                        inline: false
                    },
                    {
                        name: "User-ID",
                        value: msg.member.id,
                        inline: false
                    },
                    {
                        name: "Höchste Rolle",
                        value: msg.member.highestRole.name,
                        inline: false
                    }
                ],
                footer: {
                    text: "Coded by Rxsto",
                    icon_url: "https://rxsto.github.io/images/rxsto.png"
                }        
            }
        }
        msg.channel.send('', emb)
    },

    cmd_time(msg, args) {
        var time = msg.createdAt
        embed.emb(msg.channel, time, 'Aktuelle Zeit', COLORS.violett)
    },

    cmd_embed(msg, args) {
        var text = args.join(" ")
        embed.emb(msg.channel, text, "Information", COLORS.green)
    },

    cmd_rate(msg, args) {
        var x = Math.floor(Math.random() * 10) + 1

        var text = args.join(" ")

        embed.emb(msg.channel, ":thinking: Ich gebe `" + text + "` eine " + x + "/10.", "Bewertung", COLORS.yellow)
    }
}