<script setup lang="ts">
import type { Task, User } from "../types";

const props = defineProps<{
  task: Task;
  users: User[];
}>();

const getUserName = (userId: number): string => {
  console.log(props.users);
  const user = props.users.find((u) => u.id === userId);
  return user ? user.name : "Unassigned";
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const formatStatus = (status: string): string => {
  return status.replace("_", " ");
};

const formatDependencies = (dependencies: number[]): string => {
  return dependencies
    .map((depId) => {
      const task = props.task;
      return task ? task.title : depId;
    })
    .join(", ");
};
</script>

<template>
  <div class="task-card">
    <h3>{{ task.title }}</h3>
    <p class="task-description">{{ task.description }}</p>
    <p class="task-info">Assigned to: {{ getUserName(task.assignedTo) }}</p>
    <p class="task-info">Estimated Hours: {{ task.estimatedHours }}</p>
    <p class="task-info">Deadline: {{ formatDate(task.deadline) }}</p>
    <div>
      <span :class="'tag priority-' + task.priority">{{ task.priority }}</span>
      <span :class="'tag status-' + task.status">{{ formatStatus(task.status) }}</span>
    </div>
    <p v-if="task.dependencies.length > 0" class="task-info">
      Dependencies: {{ formatDependencies(task.dependencies) }}
    </p>
  </div>
</template>

<style scoped>
.task-card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.task-card h3 {
  margin-top: 0;
  color: #333;
}

.task-info {
  color: #666;
  font-size: 14px;
  margin: 5px 0;
}
</style>
