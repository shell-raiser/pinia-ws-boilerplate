import type { CartItem } from "@/types";
import { defineStore } from "pinia";
export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [] as CartItem[],
    };
  },
  actions: {
    addItem(count: number, productId: string) {
      const cartItem = this.items.find((item) => item.id === productId);
      if (cartItem) {
        cartItem.count += count;
      } else {
        this.items.push({
          count,
          id: productId,
        });
      }
    },
  },
});
