<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    onClick: {
        type: Function,
        required: true
    },
    sectionClass: {
        type: String,
        default: ''
    },
    buttonClass: {
        type: String,
        default: ''
    }
});

const handleClick = () => {
    props.onClick();
};

</script>
<template>
    <section :class="`flex ${props.sectionClass}`">

        <button @click="handleClick"
            :class="` bg-[#e8e5c3] px-4 py-2 rounded-md border-4  border-[#d69510]  ${props.buttonClass}`">
            <slot></slot>
        </button>
    </section>

</template>