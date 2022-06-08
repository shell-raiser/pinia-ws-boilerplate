import type { CartItem } from "@/types";
import { defineStore, acceptHMRUpdate } from "pinia";
import { useProductStore } from "./ProductStore";
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
      return count;
    },
  },
  getters: {
    cartCount: (state) => {
      return state.items.reduce((total, item) => item.count + total, 0);
    },
    isEmpty(): boolean {
      return this.cartCount === 0;
    },
    total(): number {
      const productStore = useProductStore();
      return this.items
        .map((item: CartItem) => {
          const product = productStore.products.find(
            (product) => product.id === item.id
          );
          if (product) {
            return item.count * product?.price;
          } else {
            return 0;
          }
        })
        .reduce((prev, item) => {
          return prev + item;
        }, 0);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
