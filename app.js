const { Telegraf } = require('telegraf')
const express = require('express')
const client = require('twilio')(accountSid, authToken);

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const bot = new Telegraf(process.env.SHACHAR_IO_TELEGRAM_SECRET)
const app = express()

bot.start((ctx) => ctx.reply('אפשר לבקש משחר להגיד משהו. פשוט מבקשים ממנה "שחר תגידי משהו".'))
bot.help((ctx) => ctx.reply(`
 שחר תגידי משהו \n
 יש לי פיפי \n
 דניאל תגיד משהו \n
 צילה הבת זונה \n
`))

bot.on('sticker', (ctx) => ctx.reply('אדיר אדיר אדיר'))

bot.hears('שחר תגידי משהו', (ctx) => {
    const sentences = [
        'אני רעב',
        'המבונגר',
        `ארצ'ולר`,
        'שוויץ קייס',
        'שסנים לדיבי',
        'ליקווידבייס',
        'קומפלנקס',
        'דורדורנט',
        'פוקפורן',
        'שן חותכנית',
        'אתיופנית',
        'בלייבלייד',
        'שוסי'

    ]

    const rand = Math.floor(Math.random() * sentences.length)
    return ctx.reply(sentences[rand])
})

bot.hears('יש לי פיפי', async (ctx) => {
    client.messages
        .create({
            body: 'יש לי פיפי. שחר-איי-או.',
            from: '+14793093291',
            to: '+972546933022'
        })
        .then(message => console.log(message.sid));

    return ctx.reply('נשלח לעידו SMS, אפשר ללכת לשירותים בבטחה')
})

bot.hears('דניאל תגיד משהו', (ctx) => ctx.reply('ח-ז-ק'))

bot.hears('צילה הבת זונה', (ctx) => ctx.reply('נכון'))

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
