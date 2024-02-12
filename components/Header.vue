<template>
   <header>
      <nav>
         <NuxtLink to="/">Home</NuxtLink>
         <NuxtLink to="/challenges">Challenges</NuxtLink>
      </nav>
   </header>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
   display: flex;
   justify-content: center;
   gap: 20px;
}

nav a {
   text-decoration: none;
   font-size: 20px;
   font-weight: 600;
}

nav a:hover {
   text-decoration: underline;
}
</style>
