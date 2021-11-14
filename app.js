const { Telegraf } = require('telegraf')
const express = require('express')
var nodemailer = require('nodemailer')

const bot = new Telegraf(process.env.SHACHAR_IO_TELEGRAM_SECRET)
const app = express()

const sentences = [
    'אני רעב',
    'המבונגר',
    'ארטשולר',
    'שוויץ קייס',
    'שסנים לדיבי',
    'ליקווידבייס'
]

bot.start((ctx) => ctx.reply('אפשר לבקש משחר להגיד משהו. פשוט מבקשים ממנה "שחר תגידי משהו".'))
bot.help((ctx) => ctx.reply('בשביל לבקש משחר להגיד משהו, מבקשים ממנה - "שחר תגידי משהו"'))

bot.on('sticker', (ctx) => ctx.reply('אדיר אדיר אדיר'))

bot.hears('שחר תגידי משהו', (ctx) => {
    const rand = Math.floor(Math.random() * sentences.length)
    return ctx.reply(sentences[rand])
})

bot.hears('יש לי פיפי', async (ctx) => {
    return ctx.reply('בעתיד נשלח לעידו הודעה')
})

bot.hears('דניאל תגיד משהו', (ctx) => ctx.reply('ח-ז-ק'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

app.use(express.static('public'))
app.get('/', function (req, res) {
    res.send(
        "<h1>Hello There! You found <a href='t.me/ShacharSentencesBot'>shachar-io</a> backend</h1>"
    )
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
