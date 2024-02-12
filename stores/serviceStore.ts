import { defineStore } from 'pinia'

import type { TServiceData } from './../types/service.d'

export const useServiceData = defineStore('service', {
   state: () => ({
      serviceData: [] as TServiceData[]
   }),
   getters: {
      getFilteredServices(state): TServiceData[] {
         return state.serviceData.filter((item) =>
            item.serviceName.toLowerCase().startsWith('m')
         )
      }
   },
   actions: {
      addToStore(serviceData: TServiceData) {
         this.serviceData.push(serviceData)
      }
   }
})
