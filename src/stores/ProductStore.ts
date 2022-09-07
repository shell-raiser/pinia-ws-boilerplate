import { defineStore, acceptHMRUpdate } from "pinia";

// import data
import prodData from "@/data/products.json";
export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: prodData,
    };
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
