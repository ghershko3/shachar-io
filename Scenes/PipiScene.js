// const { Scenes } = require('telegraf')

// const contactDataWizard = new Scenes.WizardScene(
//     'PIPI', // first argument is Scene_ID, same as for BaseScene
//     (ctx) => {
//         ctx.reply('מי מוסר הפיפי?');
//         ctx.wizard.state.name = '';
//         return ctx.wizard.next();
//     },
//     (ctx) => {
//         ctx.wizard.state.name = ctx.message.text;
//         ctx.reply(`תודה ${ctx.message.text}. נשלח לעידו SMS, אפשר ללכת לשירותים בבטחה`);
//         return ctx.scene.leave();
//     },
// );

// module.exports = contactDataWizard