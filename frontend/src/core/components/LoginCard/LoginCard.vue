<template>
  <q-card class="no-shadow">
    <q-card-section class="row justify-center">
      <q-img :src="img" />
    </q-card-section>
    <q-card-section class="row justify-center">
      <q-input
        v-model="login"
        label="Login"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      >
        <template #append>
          <q-icon :name="`img: ${iconUser}`"></q-icon>
        </template>
      </q-input>
    </q-card-section>
    <q-card-section class="row justify-center">
      <q-input
        v-model="password"
        label="Password"
        :type="isPwd ? 'password' : 'text'"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      >
        <template #append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </q-card-section>

    <q-card-section class="row justify-center">
      <q-btn
        text-color="black"
        label="Entrar"
        :disable="!(login && password)"
        :loading="loading"
        @click="auth({ login, password })"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const img = new URL(
  `../../assets/images/central-de-atendimento.png`,
  import.meta.url
).href;

const props = defineProps<{
  loading: boolean;
}>();

const login = ref<undefined | string>(undefined);
const password = ref<undefined | string>(undefined);
const iconUser = new URL(`../../assets/icons/user-icon.svg`, import.meta.url)
  .href;

const isPwd = ref<boolean>(true);
const emit = defineEmits(['authOperator']);

function auth(input: { login?: string; password?: string }) {
  const req = {
    input
  };
  emit('authOperator', req);
}

const loading = computed(() => {
  return props.loading;
});
</script>

<style scoped lang="scss">
.q-card {
  width: 500px;
  height: 520px;
}

.q-input {
  width: 90%;
}

.q-img {
  width: 150px;
  height: 150px;
}

.q-btn {
  width: 90%;
  height: 55px;
  border-radius: 5px;
  background: #354545;

  &:deep(.q-btn__content) {
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
}
</style>
