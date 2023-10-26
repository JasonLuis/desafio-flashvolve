import TelegramBot from "node-telegram-bot-api";
import { io } from "./http";
import { getOperatorId } from "./helper/helper";
import { CustomerService } from "./services/CustomerService";
import { ChatService } from "./services/ChatService";
const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("Missing Bot Token");
}

const customerService = new CustomerService();
const chatService = new ChatService();

let operatorId: string;

const bot = new TelegramBot(token, { polling: true });
bot.on("message", async (msg) => {
  const customer = msg.from?.first_name;
  const chatId = `${msg.chat.id}`;
  const messageText = msg.text;
  
  await customerService.create(customer, chatId);
  await chatService.create({
    idTelegram: chatId,
    operatorId: operatorId,
    text: `${messageText}`,
    sent: false,
  });
  io.emit("message", {
    chatId: chatId,
    message: messageText,
    customer: customer
  });

});

io.on("connection", async (socket) => {

  const operatorToken = socket.handshake.auth.token;
  
  if(!operatorToken) {
    throw new Error("Invalid token"); 
  }
  operatorId = getOperatorId(operatorToken) as string;
  socket.on("suport", async (data, callback) => {
    await chatService.create({
      idTelegram: data.chatId,
      text: data.msgText,
      operatorId: operatorId,
      sent: true,
    });
    await bot.sendMessage(data.chatId, data.msgText);
  });
});




