<template>
  <div class="container">
    <div class="full-height">
      <div class="full-height login">
        <UiLoginCard @auth-operator="auth"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiLoginCard from '../core/components/LoginCard/LoginCard.vue';

function auth(login: { user: string, password: string}) {
  alert(login.user + ' '+ login.password);
}

</script>

<style scoped lang="scss">

.container {
  height: 100vh;
  background-image: url(../core/assets/images/background.jpg);
  background-size: cover; /* Faz a imagem cobrir toda a área da div */
  background-position: center;
  background-attachment: fixed;
}

.login {
  width: 50%;
  background: rgba(255, 255, 255, 0.90);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>