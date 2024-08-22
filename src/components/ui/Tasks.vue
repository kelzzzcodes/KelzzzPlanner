<script setup>
import { defineProps, defineEmits } from 'vue';

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

const emit = defineEmits(['edit']);
</script>

<template>
    <section class="bg-[#f8f2bf] grid grid-cols-[auto_0.9fr_auto] gap-4 p-4 rounded-sm w-full items-center">
        <input type="checkbox" class="h-8 w-8 flex" :checked="task.isComplete" @change="toggleComplete(task.id)" />
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
            <i class="pi pi-pencil cursor-pointer hover:text-blue-500"
               :class="{ 'text-gray-400 cursor-not-allowed hover:text-gray-400': task.isComplete }"
               @click="$emit('edit', task)">
                Edit
            </i>
            <i class="pi pi-trash cursor-pointer hover:text-red-500 text-xl" @click="deleteTask(task.id)"></i>
        </div>
    </section>
</template>
