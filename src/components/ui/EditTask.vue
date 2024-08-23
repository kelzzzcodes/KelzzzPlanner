<!-- <script setup>
import { ref, watch, computed } from 'vue'
import Button from './Button.vue'

// Props
const props = defineProps({
    task: {
        type: Object,
        default: () => ({ title: '', description: '', dueDate: '' })
    }
})

// Form state
const form = ref({
    title: '',
    description: '',
    dueDate: ''
})

// Watch for changes to props.task and update the form
watch(() => props.task, (newTask) => {
    if (newTask) {
        form.value = { ...newTask }
    }
}, { immediate: true })

const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', form.value)
}
</script>

<template>
    <section class="p-4">
        <h2 class="text-xl font-bold mb-4">Edit Task</h2>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label class="text-lg">Title</label>
                <input type="text" v-model="form.title" placeholder="Enter Title"
                    class="outline-none border-2 border-[#002263] rounded-md p-2" />
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-lg">Description</label>
                <textarea v-model="form.description" placeholder="Enter Description"
                    class="outline-none border-2 border-[#002263] rounded-md p-2 h-32"></textarea>
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-lg">Due Date</label>
                <input type="date" v-model="form.dueDate"
                    class="outline-none border-2 border-[#002263] rounded-md p-2" />
            </div>
            <Button :buttonClass="`!border-[#002263]`" :sectionClass="`justify-end`">
                Submit
            </Button>
        </form>
    </section>
</template> -->

<script setup>
import { ref, watch } from 'vue'
import Button from './Button.vue'

// Props
const props = defineProps({
    task: {
        type: Object,
        default: () => ({ id: null, title: '', description: '', dueDate: '' })
    }
})

// Form state
const form = ref({
    title: '',
    description: '',
    dueDate: ''
})

// Watch for changes to props.task and update the form
watch(() => props.task, (newTask) => {
    if (newTask) {
        form.value = { ...newTask }
    }
}, { immediate: true })

const handleSubmit = () => {
    // Update the task in local storage based on the task ID
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const updatedTasks = tasks.map(task =>
        task.id === props.task.id ? { ...form.value, id: props.task.id } : task
    )
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    console.log('Form submitted:', form.value)
    // Refresh the page
    window.location.reload();
}
</script>

<template>
    <section class="p-4">
        <h2 class="text-xl font-bold mb-4">Edit Task</h2>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label class="text-lg">Title</label>
                <input type="text" v-model="form.title" placeholder="Enter Title"
                    class="outline-none border-2 border-[#002263] rounded-md p-2" />
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-lg">Description</label>
                <textarea v-model="form.description" placeholder="Enter Description"
                    class="outline-none border-2 border-[#002263] rounded-md p-2 h-32"></textarea>
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-lg">Due Date</label>
                <input type="date" v-model="form.dueDate"
                    class="outline-none border-2 border-[#002263] rounded-md p-2" />
            </div>
            <Button :onClick="handleSubmit" :buttonClass="`!border-[#002263]`" :sectionClass="`justify-end`">
                Submit
            </Button>
        </form>
    </section>
</template>
