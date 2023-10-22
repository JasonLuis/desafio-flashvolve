import { storeToRefs } from 'pinia';
import { Helper } from '~/shared/helper/Helper';
import { useAuthStore } from '~/store/authenticate';

export default defineNuxtRouteMiddleware(to => {
  const { authenticated } = storeToRefs(useAuthStore());

  const token = useCookie('token-key');

  if (token.value) {
    authenticated.value = true;
  }

  if (Helper.isDefined(token.value) && to?.name === 'index') {
    return navigateTo('/service');
  }

  if (Helper.isNotDefined(token.value) && to?.name !== 'index') {
    abortNavigation();
    return navigateTo('');
  }
});
