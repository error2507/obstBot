const { RichEmbed } = require('discord.js')

module.exports = {
    emb(channel, content, title, color) {
        var message
        var emb = new RichEmbed()
            .setColor(color)
            .setDescription(content)
            .setAuthor('obstBot', 'https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/SWW6oiIjZj80dk6ky/storyblocks-apple-icon-flat-apple-icon-apple-vector_rKgyODyXyG_thumb.jpg', 'http://rxsto.github.io')
            .setFooter('Coded By Rxsto', 'https://rxsto.github.io/images/rxsto.png')
        if(title) {
            emb.setTitle(title)
        }
        channel.send('', emb).then((m) => {
            message = m
        })
        return message
    }
}