<script setup>
import { ref, onMounted } from 'vue';
import Tasks from './ui/Tasks.vue';

const tasks = ref([]);

const fetchTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.value = storedTasks;
};

const deleteTask = (taskId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
        const updatedTasks = tasks.value.filter(task => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        tasks.value = updatedTasks;
    }
};

const toggleComplete = (taskId) => {
    const updatedTasks = tasks.value.map(task =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    tasks.value = updatedTasks;
};



onMounted(() => {
    fetchTasks();
});
</script>

<template>
    <section class="flex flex-col gap-2 py-8">
        <Tasks v-for="task in tasks" :key="task.id" :task="task" :deleteTask="deleteTask"
            :toggleComplete="toggleComplete" />
    </section>
</template>
