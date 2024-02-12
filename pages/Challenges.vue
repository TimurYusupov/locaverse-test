<template>
   <div class="container">
      <section class="mt-5 challenges">
         <h1>Experience</h1>
         <p>
            Es war etwas ungewohnt, TypeScript in Nuxt 3 zu verwenden, da ich zuvor
            TypeScript nur in Verbindung mit React/Redux benutzt hatte. Ich bin sicher,
            dass es viele Fehler in meinem Code gibt, die mit TypeScript zusammenhängen.
            Aber im Allgemeinen war die Aufgabe wirklich einfach.
         </p>
      </section>

      <h2 v-if="filteredServices.length" class="mt-5 text-center">List of m-services</h2>

      <section v-if="filteredServices.length" class="service-card-wrapper mt-5 mb-5">
         <ServiceCard
            v-for="data in filteredServices"
            :key="data.serviceName"
            :serviceName="data.serviceName"
            :serviceBusiness="data.serviceBusiness"
            :serviceRating="data.serviceRating"
            as="ServiceCardProps"
         />
      </section>
   </div>
</template>

<script setup lang="ts">
import { useServiceData } from '../stores/serviceStore'

const store = useServiceData()
const filteredServices = store.getFilteredServices
</script>

<style scoped>
.challenges {
   max-width: 500px;
   margin: 0 auto;
}

.challenges h1 {
   font-size: 30px;
}

.challenges p {
   font-size: 18px;
}

@media (min-width: 500px) {
   .challenges h1 {
      font-size: 32px;
   }

   .challenges p {
      font-size: 20px;
   }
}
</style>
