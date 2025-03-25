<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  optimizeWorkflow: () => Promise<any>;
}>();

const results = ref<any>(null);
const isVisible = ref(false);

const handleOptimize = async () => {
  try {
    results.value = await props.optimizeWorkflow();
    isVisible.value = true;
  } catch (error) {
    console.error("Error in optimization:", error);
  }
};
</script>

<template>
  <div class="optimization-section card">
    <h2>Workflow Optimization</h2>
    <p>Click the "Optimize Workflow" button to run the optimization algorithm.</p>

    <div :class="['results-section', { visible: isVisible }]">
      <h3>Optimization Results</h3>
      <p>This section will display the results of the workflow optimization.</p>
      <div class="optimization-output">
        <pre v-if="results">{{ JSON.stringify(results, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.optimization-section {
  margin-top: 40px;
}

.results-section {
  margin-top: 20px;
  display: none;
}

.results-section.visible {
  display: block;
}

.optimization-output {
  background-color: #f6f8fa;
  border-radius: 4px;
  padding: 15px;
  margin-top: 10px;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
