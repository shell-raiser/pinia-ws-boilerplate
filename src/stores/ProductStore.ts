import type { Product } from "@/types";
import { defineStore, acceptHMRUpdate } from "pinia";
export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [] as Product[],
    };
  },
  actions: {
    async fill() {
      const res = await fetch("/products.json");
      this.products = await res.json();
    },
  },
});
