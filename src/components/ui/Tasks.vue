<script setup>
import { ref } from 'vue'
import EditTask from './EditTask.vue'
import ModalComponent from './ModalComponent.vue'

// Props
const props = defineProps({
    task: {
        type: Object,
        required: true
    },
    deleteTask: {
        type: Function,
        required: true
    },
    toggleComplete: {
        type: Function,
        required: true,
    },
});

// State
const isModalOpen = ref(false)

// Methods
const openEditModal = () => {
    isModalOpen.value = true
}

const closeEditModal = () => {
    isModalOpen.value = false
}
</script>

<template>
    <section class="bg-yellow-100 grid grid-cols-[auto_0.9fr_auto] gap-4 p-4 rounded-sm w-full items-center">
        <input type="checkbox" class="h-8 w-8" :checked="task.isComplete" @change="toggleComplete(task.id)" />
        <div class="flex flex-col overflow-hidden">
            <ul>
                <li class="font-bold">
                    {{ task.title }}
                </li>
                <li class="break-words">
                    {{ task.description }}
                </li>
                <li>
                    {{ task.dueDate }}
                </li>
            </ul>
        </div>
        <div class="flex gap-2 items-center">


            <i v-if="!task.isComplete" class="pi pi-pencil cursor-pointer hover:text-blue-500" @click="openEditModal">
                Edit
            </i>
            <i class="pi pi-trash cursor-pointer hover:text-red-500 text-xl" @click="deleteTask(task.id)"></i>
        </div>
    </section>

    <!-- Modal that shows based on isModalOpen -->
    <ModalComponent :isOpen="isModalOpen" @close="closeEditModal">
        <EditTask :task="props.task" />
    </ModalComponent>
</template>
