<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="row items-center">
        <q-avatar size="50px">
          <img :src="user.avatar" alt="Avatar" />
        </q-avatar>
        <div class="q-ml-md">
          <div class="text-h6">{{ user.first_name }} {{ user.last_name }}</div>
          <div class="text-subtitle2 text-grey">{{ user.email }}</div>
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat icon="edit" @click="$emit('edit-user', user)" />
      <q-btn flat icon="delete" color="negative" @click="$emit('delete-user', user.id)" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
