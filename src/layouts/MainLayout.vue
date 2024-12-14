<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Cabeçalho -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Wiki Soluções e Desenvolvimentos Ltda.</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Menu Lateral (Drawer) -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item v-for="link in linksList" :key="link.title" clickable @click="navigate(link)">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Conteúdo Principal -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data() {
    return {
      linksList: [
        {
          title: 'Dashboard',
          icon: 'dashboard',
          link: '/dashboard',
        },
        {
          title: 'Admin',
          icon: 'admin_panel_settings',
          link: '/users',
        },
        {
          title: 'Logout',
          icon: 'logout',
          link: '/logout',
        },
      ],
      leftDrawerOpen: false,
    }
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    async navigate({ link }) {
      if (link === '/logout') {
        // Realiza o logout chamando a ação do Vuex
        try {
          await this.$store.dispatch('auth/logout')
          this.$router.push('/') // Redireciona para a página de login
        } catch (error) {
          console.error('Erro ao fazer logout:', error)
        }
      } else {
        this.$router.push(link) // Navega para a rota clicada
      }
    },
  },
}
</script>
