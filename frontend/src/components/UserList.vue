<script setup lang="ts">
import type { User } from "../types";
import UserCard from "./UserCard.vue";

defineProps<{
  users: User[];
}>();
</script>

<template>
  <div class="user-list">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<style scoped>
.user-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
