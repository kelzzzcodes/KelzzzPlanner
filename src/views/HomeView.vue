<script setup>
import AddTask from '@/components/AddTask.vue';

import ListTask from '@/components/ListTask.vue';



</script>

<template>
  <main>

    <div class=" mx-auto flex flex-col gap-8 justify-center w-[80%] md:w-[60%] mt-10 ">
      <AddTask />

      <ListTask />
      <!-- <EditTask/> -->

    </div>
  </main>
</template>
