<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import OptimizationSection from "./components/OptimizationSection.vue";
import TaskList from "./components/TaskList.vue";
import UserList from "./components/UserList.vue";
import type { Task, User } from "./types";

const tasks = ref<Task[]>([]);
const users = ref<User[]>([]);
const apiUrl = "http://localhost:3000/api";

const fetchTasks = async () => {
  try {
    const response = await axios.get(`${apiUrl}/tasks`);
    tasks.value = response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

const fetchUsers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users`);
    users.value = response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const optimizeWorkflow = async () => {
  try {
    const response = await axios.post(`${apiUrl}/optimize-workflow`, {
      tasks: tasks.value,
      users: users.value,
    });
    return response.data;
  } catch (error) {
    console.error("Error optimizing workflow:", error);
    throw error;
  }
};

onMounted(() => {
  fetchTasks();
  fetchUsers();
});
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>Accounting Task Management</h1>
      <button class="button" @click="optimizeWorkflow">Optimize Workflow</button>
    </div>

    <div class="card">
      <h2>Tasks</h2>
      <TaskList :tasks="tasks" :users="users" />
    </div>

    <div class="users-section">
      <h2>Team Members</h2>
      <UserList :users="users" />
    </div>

    <OptimizationSection :optimize-workflow="optimizeWorkflow" />
  </div>
</template>

<style>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
}

.container {
  max-width: 1200px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.button {
  background-color: #0366d6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0255b3;
}

.users-section {
  margin-top: 40px;
}

/* Global tag styles */
.tag {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 15px;
  font-size: 12px;
  margin-right: 5px;
}

.priority-high,
.priority-urgent {
  background-color: #ffecec;
  color: #d73a49;
}

.priority-medium {
  background-color: #fff9db;
  color: #b38105;
}

.priority-low {
  background-color: #e6ffed;
  color: #2ea44f;
}

.status-pending {
  background-color: #f1f8ff;
  color: #0366d6;
}

.status-in_progress {
  background-color: #fff9db;
  color: #b38105;
}

.status-completed {
  background-color: #e6ffed;
  color: #2ea44f;
}
</style>
