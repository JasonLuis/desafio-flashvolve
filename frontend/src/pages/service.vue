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
<<<<<<< HEAD
=======

const socket = useSocket();
>>>>>>> d27820e4aa064d2bbb3071fd638923429a181c43
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> d27820e4aa064d2bbb3071fd638923429a181c43
