<template>
   <div>
      <Header />
      <main class="mt-5">
         <NuxtLayout>
            <NuxtPage />
         </NuxtLayout>
      </main>
   </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>
