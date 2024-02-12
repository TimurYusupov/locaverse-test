<template>
   <article class="service-card border border-info rounded shadow">
      <img
         class="service-card__img"
         src="../assets/img/dummy_500x300.png"
         alt="Service Image"
      />
      <div class="service-card__bottom">
         <h3 class="mt-2">{{ serviceName }}</h3>
         <h4 class="mt-2">{{ serviceBusiness }}</h4>
         <h5 class="rating mt-1">
            <span>{{ serviceRating }}</span>
            <img
               class="star-icon"
               src="../assets/img/star-regular.svg"
               alt="Start Icon"
            />
         </h5>
      </div>
   </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

export interface ServiceCardProps {
   serviceName: string
   serviceBusiness: string
   serviceRating: number
}

const props = defineProps<ServiceCardProps>()
</script>

<style scoped>
.service-card {
   width: 260px;
}

.service-card__img {
   width: 100%;
}

.service-card__bottom {
   padding: 10px;
}

h3 {
   font-size: 24px;
}

h4 {
   font-size: 21px;
}

.rating {
   display: flex;
   align-items: center;
}

.star-icon {
   width: 22px;
}
</style>
