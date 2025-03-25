<script setup lang="ts">
import type { User } from "../types";

defineProps<{
  user: User;
}>();
</script>

<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p class="user-info">Role: {{ user.role }}</p>
    <p class="user-info">Skills: {{ user.skills.join(", ") }}</p>
    <p class="user-info">Availability:</p>
    <ul>
      <li>Monday: {{ user.availability.monday }} hours</li>
      <li>Tuesday: {{ user.availability.tuesday }} hours</li>
      <li>Wednesday: {{ user.availability.wednesday }} hours</li>
      <li>Thursday: {{ user.availability.thursday }} hours</li>
      <li>Friday: {{ user.availability.friday }} hours</li>
    </ul>
  </div>
</template>

<style scoped>
.user-card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: calc(33% - 15px);
}

.user-info {
  color: #666;
  font-size: 14px;
  margin: 5px 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 5px 0;
}

li {
  color: #666;
  font-size: 14px;
  margin: 3px 0;
}
</style>
