<template>
  <div>
    <div class="row q-pt-md q-pl-xl items-center">
      <q-img :src="image" />
      <p class="q-ma-none q-pl-md">Nome do Cliente</p>
    </div>
    <q-separator class="q-mt-md" />

    <div class="row messages justify-center">
      <div class="q-pa-md col-8 justify-center">
        <div style="width: 100%">
          <div v-for="(ms, index) in chat" :key="index">
            <UiChatMessage
              :name="ms.name"
              :message="ms.message"
              :stamp="ms.stamp"
              :sent="ms.sent"
            />
          </div>

          <!-- <q-chat-message
            name="<span class='text-positive'>Untrusted Source</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="['hey, how are <strong>you</strong>?']"
            stamp="7 minutes ago"
            sent
            bg-color="amber-7"
          />
          <q-chat-message
            name="<span class='text-negative'>Jane (trusted name but untrusted text)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="[
              'doing fine, how r you?',
              'I just feel like typing a really, really, <strong>REALLY</strong> long message to annoy you...'
            ]"
            size="6"
            stamp="4 minutes ago"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="<span class='text-negative'>Jao (trusted)</span>"
            name-html
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['<strong>Did it work?</strong>']"
            text-html
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="primary"
          /> -->
        </div>
      </div>
    </div>
    <div class="row send-message items-center justify-center">
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
}

const chat = ref<chatMessage[]>([]);

const messageText = ref<string | undefined>(undefined);

const image = new URL(`../core/assets/images/bot-image.png`, import.meta.url)
  .href;

const connectSocket = useSocket();
const io = useIO();
const socket = io('http://localhost:3000');
const connected = ref<boolean>(false);
let idTelegram: string | undefined;

socket.on('message', data => {
  idTelegram = data.chatId;
  chat.value.push({
    name: data.customer,
    message: data.message,
    stamp: new Date().toString(),
    sent: true
  });
});

onMounted(() => {
  socket.on('connect', () => {
    connected.value = connectSocket.connected;
  });
});
const sendMessage = () => {
  if (connected.value && idTelegram !== undefined) {
    socket.emit('suport', {
      chatId: idTelegram,
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

.messages div div {
  overflow: auto;
  max-height: 48.5rem;
}
.send-message {
  height: 8.8vh;
}

.q-input {
  width: 60%;
}
</style>
