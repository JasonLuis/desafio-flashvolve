<template>
  <div class="image-background">
    <template v-if="idTelegram !== undefined">
      <div class="row q-pt-md q-pl-xl items-center">
        <q-img :src="image" />
        <p class="q-ma-none q-pl-md">Nome do Cliente</p>
      </div>
      <q-separator class="q-mt-md" />

      <div class="row messages justify-center">
        <div class="scroll col-12">
          <div class="q-pl-xl col-8 q-pr-xl justify-center">
            <div style="width: 100%">
              <div v-for="(ms, index) in chat" :key="index">
                <UiChatMessage
                  :name="ms.name"
                  :message="ms.message"
                  :stamp="ms.stamp"
                  :sent="ms.sent"
                  :avatar="ms.avatar"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-8 fixed send-message">
          <q-input
            v-model="messageText"
            outlined
            :dense="true"
            @keyup.enter="sendMessage()"
          >
            <template #append>
              <q-icon name="send" @click="sendMessage()" />
            </template>
          </q-input>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="image-background fit"></div>
    </template>
  </div>
</template>
<script setup lang="ts">
import UiChatMessage from '~/core/components/ChatMessage/ChatMessage.vue';
definePageMeta({
  layout: 'message'
});

interface chatMessage {
  name: string;
  message: string;
  stamp: string;
  sent?: boolean;
  avatar?: string;
}

const chat = ref<chatMessage[]>([]);
const idTelegram = ref<string | undefined>(undefined);

const messageText = ref<string | undefined>(undefined);

const image = new URL(`../core/assets/icons/people.png`, import.meta.url).href;

const connectSocket = useSocket();
const io = useIO();
const socket = io('http://localhost:3000', {
  auth: {
    token: useCookie('token-key').value
  }
});
const connected = ref<boolean>(false);

socket.on('message', data => {
  idTelegram.value = data.chatId;
  chat.value.push({
    name: data.customer,
    message: data.message,
    stamp: new Date().toString(),
    sent: true,
    avatar: '../../assets/icons/people.png'
  });
});

onMounted(() => {
  socket.on('connect', () => {
    connected.value = connectSocket.connected;
  });
});

const sendMessage = () => {
  if (connected.value && idTelegram.value !== undefined && messageText.value) {
    console.log('telegramId', idTelegram.value);
    socket.emit('suport', {
      chatId: idTelegram.value,
      msgText: messageText.value
    });

    chat.value.push({
      name: 'Operador',
      message: `${messageText.value}`,
      stamp: new Date().toString(),
      sent: false
    });
  }

  messageText.value = undefined;
};
</script>

<style scoped lang="scss">
.image-background {
  background-image: url('../core/assets/images/backround-message.jpg');
  background-size: cover;
  height: 100vh !important;
}
.q-img {
  height: 70px;
  width: 70px;
}

p {
  color: #4399ff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.messages {
  height: 80vh;
}

.messages div:first-child {
  max-height: 88%;
}
.messages div div {
  max-height: 48.5rem;
}
.send-message {
  height: 8.8vh;
  bottom: 0;
  display: flex;
  justify-content: center;
}

.q-input {
  width: 60%;
}
</style>
