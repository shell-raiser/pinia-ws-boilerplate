import { defineStore, acceptHMRUpdate } from 'pinia' 

import cartData from "@/data/cart.json";
export const useCartStore  =  defineStore('CartStore',{
    state: () => {
        return {
          items: cartData,
        };
      },
})
if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}