<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
      v-model="leftDrawerOpen"
      :width="380"
      show-if-above
      side="left"
      bordered
    >
      <q-item>
        <q-item-section side class="q-mt-lg q-ml-sm">
          <q-avatar size="80px" rounded>
            <img src="~~/core/assets/images/bot-image.png" alt="" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Mary</q-item-label>
          <q-item-label caption class="text-black">Operador</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="row justify-center">
        <q-input v-model="text" rounded outlined>
          <template #append>
            <q-avatar>
              <q-icon size="30px" name="search" />
            </q-avatar>
          </template>
        </q-input>
      </q-item>
      <q-separator class="q-mt-xl" />
      <!-- drawer content -->

      <q-list>
        <q-item class="q-mt-lg">
          <q-item-section side>
            <q-avatar size="50px" rounded>
              <img src="~~/core/assets/images/bot-image.png" alt="" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Mary
              <q-badge color="teal">new</q-badge>
            </q-item-label>
            <q-item-label caption class="text-message">
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-drawer
      v-model="leftDrawerOpen"
      :width="180"
      show-if-above
      side="right"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref<boolean>(false);
</script>

<style scoped lang="scss">
.q-drawer {
  height: 100vh;
}

.q-item__label {
  font-size: 20px;
  color: #4399ff;
}

.q-input {
  width: 357px;
  height: 30px;
  background: #fff;
}

.text-message {
  color: #959595;
  font-size: 12px;
}
</style>
