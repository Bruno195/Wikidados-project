<template>
  <q-page class="flex flex-center">
    <q-card style="width: 300px">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="email" label="Email" dense></q-input>
        <q-input v-model="password" type="password" label="Senha" dense></q-input>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Entrar" color="primary" @click="doLogin"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async doLogin() {
      try {
        await this.$store.dispatch('auth/login', { email: this.email, password: this.password })
        this.$router.push('/dashboard')
      } catch (e) {
        console.error(e)
        this.$q.notify({
          type: 'negative', // Notificação de erro
          message: 'Falha no login. Verifique suas credenciais e tente novamente.',
          position: 'top-right', // Posição da notificação
        })
      }
    },
  },
}
</script>
