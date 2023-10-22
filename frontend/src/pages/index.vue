<template>
  <div class="container">
    <div class="full-height">
      <div class="full-height login">
        <UiLoginCard @auth-operator="auth" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import UiLoginCard from '../core/components/LoginCard/LoginCard.vue';
import { AuthOperatorDTO } from '~/app/modules/login/use-cases/Auth/AuthOperatorDTO';
import { useAuthStore } from '~/store/authenticate';

const { authOperator } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const router = useRouter();
const auth = async (req: AuthOperatorDTO.Request) => {
  await authOperator(req);

  if (authenticated) {
    router.push('/service');
  }
};
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
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
