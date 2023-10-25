import TelegramBot from "node-telegram-bot-api";
import { io } from "./http";
const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("Missing Bot Token");
}

const bot = new TelegramBot(token, { polling: true });
bot.on("message", (msg) => {
  const customer = msg.from?.first_name;
  const chatId = msg.chat.id;
  const messageText = msg.text;
  console.log("teste", messageText);
  io.emit("message", {
    chatId: chatId,
    message: messageText,
    customer: customer
  });
});

io.on("connection", (socket) => {
  socket.on("suport", async (data, callback) => {
    await bot.sendMessage(data.chatId, data.msgText);
  });
});


