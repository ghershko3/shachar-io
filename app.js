const { Telegraf } = require('telegraf')

const bot = new Telegraf('2104309510:AAFMeJzTIyIseGLSAPtjetZ_8-U_ofBb10E')

const sentences = [
    'אני רעב',
    'המבונגר',
    'ארטשולר'
]

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.hears('שחר תגידי משהו', (ctx) => {
    const rand = Math.floor(Math.random() * sentences.length)
    return ctx.reply(sentences[rand])
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))