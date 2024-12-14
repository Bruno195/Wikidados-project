<template>
  <q-card style="width: 100%; max-width: 400px">
    <q-card-section>
      <div class="text-h6">{{ user.id ? 'Editar Usuário' : 'Novo Usuário' }}</div>
    </q-card-section>
    <q-card-section>
      <q-input v-model="localUser.first_name" label="Primeiro Nome" dense />
      <q-input v-model="localUser.last_name" label="Último Nome" dense />
      <q-input v-model="localUser.email" label="Email" dense />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Cancelar" @click="$emit('cancel')" />
      <q-btn flat label="Salvar" color="primary" @click="submit" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      default: () => ({
        id: null,
        first_name: '',
        last_name: '',
        email: '',
      }),
    },
  },
  data() {
    return {
      localUser: { ...this.user },
    }
  },
  watch: {
    user: {
      handler(val) {
        this.localUser = { ...val }
      },
      deep: true,
    },
  },
  methods: {
    submit() {
      this.$emit('submit', { ...this.localUser })
    },
  },
}
</script>
