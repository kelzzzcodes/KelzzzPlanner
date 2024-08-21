<script setup>
import AddTask from '@/components/AddTask.vue';
import ListTask from '@/components/ListTask.vue';
import Navbar from '@/components/Navbar.vue';


</script>

<template>
  <main>

    <div class=" mx-auto flex flex-col gap-8 justify-center w-[80%] md:w-[60%] ">
      <AddTask />
      <ListTask />

    </div>
  </main>
</template>
