<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isOpen: Boolean
});

const emits = defineEmits(['close']);

const closeModal = () => {
    emits('close');
};
</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
        <div class="bg-white rounded-lg shadow-custom-combined p-6 relative w-full max-w-md mx-auto" @click.stop>
            <button class="absolute top-2 right-2 text-gray-600 hover:text-gray-900" @click="closeModal">
                <i class="pi pi-times"></i>
            </button>
            <slot></slot>
        </div>
    </div>
</template>
