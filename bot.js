import { Telegraf } from 'telegraf';

// 🔐 Сюда вставь свой токен
const bot = new Telegraf('8194849046:AAGE0atgOipBKF-akWVPZ308aoj50X8Ptk4');

// Обработка команды /start
bot.start((ctx) => {
  ctx.reply('Открой трекер расходов 👇', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть',
            web_app: {
              url: 'https://tg-project-kappa.vercel.app' // ← твой фронт
            }
          }
        ]
      ]
    }
  });
});


export default bot;


