<template>
  <div>
    <div class="row q-pt-md q-pl-xl items-center">
      <q-img :src="image" />
      <p class="q-ma-none q-pl-md">Nome do Cliente</p>
    </div>
    <q-separator class="q-mt-md" />

    <div class="row messages">teste</div>
    <div class="row send-message items-center justify-center">
      <q-input v-model="textSpanContainsTextSpan" outlined />
      <q-btn class="q-ml-sm"> Enviar </q-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'message'
});

const image = new URL(`../core/assets/images/bot-image.png`, import.meta.url)
  .href;

const socket = useSocket();
const io = useIO();
const socket2 = io('http://localhost:3000');
const connected = ref<boolean>(false);

onMounted(() => {
  socket.on('connect', () => {
    connected.value = socket.connected;
  });

  socket2.on('disconnect', () => {
    connected.value = socket.connected;
  });
});

watch(connected, (newX) => {
  console.log(`x is ${newX}`);
});
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

.send-message {
  height: 8.8vh;
}

.q-input {
  width: 80%;
}
</style>
