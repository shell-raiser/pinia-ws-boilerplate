import { defineStore, acceptHMRUpdate } from 'pinia' 
export const useProductStore  =  defineStore('ProductStore',{

})
if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}