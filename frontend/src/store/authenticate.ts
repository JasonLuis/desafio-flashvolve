import { defineStore } from 'pinia';
import { authOperatorUseCase } from '~/app/modules/login/use-cases/Auth';
import { AuthOperatorDTO } from '~/app/modules/login/use-cases/Auth/AuthOperatorDTO';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false
  }),
  actions: {
    async authOperator(req: AuthOperatorDTO.Request) {
      this.loading = true;
      const res = await authOperatorUseCase.execute(req);
      this.loading = false;
      if (res.isLeft()) {
        const token = useCookie('token-key');
        this.authenticated = false;
        token.value = undefined;
        alert('Auth invalid');
      } else {
        const token = useCookie('token-key');
        token.value = res.value.getValue().token;
        this.authenticated = true;
      }
    },
    logout() {
      const token = useCookie('token-key');
      this.authenticated = false;
      token.value = undefined;
    }
  }
});
