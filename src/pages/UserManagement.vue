<template>
  <q-page padding>
    <div class="q-mb-lg">
      <div class="row justify-between items-center">
        <div class="text-h5">Gerenciamento de Usuários</div>
        <q-btn color="primary" label="Novo Usuário" @click="openForm()" />
      </div>
    </div>

    <q-row class="q-gutter-md">
      <q-col v-for="user in users" :key="user.id" cols="12" sm="6" md="4" lg="3">
        <UserCard :user="user" @edit-user="openForm" @delete-user="removeUser" />
      </q-col>
    </q-row>

    <div class="q-mt-lg row justify-center">
      <q-pagination
        v-model="currentPage"
        :max="pagination.total_pages"
        @update:model-value="fetchPage"
      />
    </div>

    <q-dialog v-model="formDialog" persistent>
      <UserForm :user="formUser" @cancel="formDialog = false" @submit="saveUser" />
    </q-dialog>
  </q-page>
</template>

<script>
import UserCard from 'src/components/UserCard.vue'
import UserForm from 'src/components/UserForm.vue'

export default {
  name: 'UserManagement',
  components: { UserCard, UserForm },
  data() {
    return {
      formDialog: false,
      formUser: {
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        avatar: '',
      },
      currentPage: 1,
    }
  },
  computed: {
    users() {
      return this.$store.state.user.users
    },
    pagination() {
      return this.$store.state.user.pagination
    },
  },
  methods: {
    openForm(user = { id: null, first_name: '', last_name: '', email: '', avatar: '' }) {
      this.formUser = { ...user }
      this.formDialog = true
    },
    async saveUser(data) {
      try {
        if (data.id) {
          // Atualiza usuário existente
          await this.$store.dispatch('user/updateUserAction', { id: data.id, data })
        } else {
          // Cria um novo usuário
          await this.$store.dispatch('user/createUserAction', data)
        }

        this.formDialog = false // Fecha o modal
      } catch (error) {
        console.error('Erro ao salvar usuário:', error)
      }
    },
    async removeUser(id) {
      await this.$store.dispatch('user/deleteUserAction', id)
    },
    async fetchPage(page) {
      this.currentPage = page
      await this.$store.dispatch('user/fetchUsers', page)
    },
  },
  async mounted() {
    await this.fetchPage(this.currentPage)
  },
}
</script>
