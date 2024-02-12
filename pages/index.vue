<template>
   <div class="container">
      <form class="form" @submit.prevent="sendData">
         <div class="mb-3">
            <label for="serviceName" class="form-label">Service Name</label>
            <input
               type="text"
               class="form-control"
               id="serviceName"
               placeholder="Enter your service name"
               v-model="serviceName"
               required
            />
         </div>
         <div class="mb-3">
            <label for="businessName" class="form-label">Business Name</label>
            <input
               type="text"
               class="form-control"
               id="businessName"
               placeholder="Enter your business name"
               v-model="serviceBusiness"
               required
            />
         </div>
         <div class="mb-3">
            <label for="serviceRating" class="form-label">Service Rating</label>
            <input
               type="number"
               class="form-control"
               id="serviceRating"
               placeholder="Enter service rating"
               v-model="serviceRating"
               required
            />
         </div>

         <button class="btn btn-success" type="submit" :disabled="formIncomplete">
            Submit
         </button>
      </form>

      <h1 v-if="serviceData.length" class="mt-5 text-center">List of services</h1>

      <section v-if="serviceData.length" class="service-card-wrapper mt-5 mb-5">
         <ServiceCard
            v-for="data in serviceData"
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
import { ref, computed } from 'vue'

import { useServiceData } from '../stores/serviceStore'
import type { TServiceData } from '../types/service.d'

const store = useServiceData()
const { serviceData } = store.$state

const serviceName = ref<string>('')
const serviceBusiness = ref<string>('')
const serviceRating = ref<number>()

const formIncomplete = computed(() => {
   if (
      !serviceName.value ||
      !serviceBusiness.value ||
      !serviceRating.value ||
      serviceRating.value === 0
   ) {
      return true
   }
   return false
})

const sendData = () => {
   if (serviceRating.value !== undefined) {
      const newServiceData: TServiceData = {
         serviceName: serviceName.value,
         serviceBusiness: serviceBusiness.value,
         serviceRating: serviceRating.value
      }

      store.addToStore(newServiceData)

      serviceName.value = ''
      serviceBusiness.value = ''
      serviceRating.value = undefined
   }
}
</script>

<style>
.form {
   max-width: 500px;
   margin: 0 auto;
}

label {
   font-weight: 700;
}

.service-card-wrapper {
   display: flex;
   justify-content: center;
   gap: 20px;
   flex-wrap: wrap;
}
</style>
