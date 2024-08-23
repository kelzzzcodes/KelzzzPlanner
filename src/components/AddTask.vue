<script setup>
import { ref } from 'vue';
import Button from './ui/Button.vue';
import ModalComponent from './ui/ModalComponent.vue';
const tasks = ref([]);



const isModalOpen = ref(false);

const title = ref('');
const description = ref('');
const dueDate = ref('');

const handleAddTaskModal = () => {
    isModalOpen.value = true;
};

const fetchTasks = () => {
    tasks.value = JSON.parse(localStorage.getItem('tasks')) || [];
};

const handleSubmit = () => {
    if (title.value.trim() === '') {
        alert('Title is required.');
        return;
    }

    const taskId = `task-${Date.now()}`;
    const task = {
        id: taskId,
        title: title.value,
        description: description.value,
        dueDate: dueDate.value,
        isComplete: false,
    };

    // Retrieve the existing tasks from localStorage, or initialize an empty array if none exist
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the array
    existingTasks.push(task);

    // Save the updated array back to localStorage
    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    alert('Task added successfully!');
    fetchTasks();
    isModalOpen.value = false;
    title.value = '';
    description.value = '';
    dueDate.value = '';

    // Refresh the page
    window.location.reload();
};
</script>

<template>
    <section>
        <Button :onClick="handleAddTaskModal" :sectionClass="`justify-end`">
            Add Task
        </Button>

        <ModalComponent :isOpen="isModalOpen" @close="isModalOpen = false">
            <h2 class="text-xl font-bold">Add Task</h2>
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-2">
                <div class="flex flex-col gap-2">
                    <label class="text-lg">Title</label>
                    <input type="text" v-model="title" placeholder="Enter Title"
                        class="outline-none border-2 border-[#002263] rounded-md p-2" />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-lg">Description</label>
                    <textarea v-model="description" placeholder="Enter Description"
                        class="outline-none border-2 border-[#002263] rounded-md p-2 h-32"></textarea>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-lg">Due Date</label>
                    <input type="date" v-model="dueDate" placeholder="Enter Description"
                        class="outline-none border-2 border-[#002263] rounded-md p-2" />
                </div>
                <Button :onclick="handleSubmit" :buttonClass="`!border-[#002263]`" :sectionClass="`justify-end`">
                    Submit
                </Button>
            </form>
        </ModalComponent>
    </section>
</template>
