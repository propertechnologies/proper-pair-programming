<script setup lang="ts">
import type { Task, User } from "../types";
import TaskCard from "./TaskCard.vue";

defineProps<{
  tasks: Task[];
  users: User[];
}>();
</script>

<template>
  <div class="task-grid">
    <TaskCard v-for="task in tasks" :key="task.id" :task="task" :users="users" />
  </div>
</template>

<style scoped>
.task-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
