<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
const productStore = useProductStore();
const cartStore = useCartStore();

// cartStore.$subscribe((mutation, state) => {
//   window.localStorage.setItem("cartStore", JSON.stringify(state));
// });
// const localData = window.localStorage.getItem("cartStore");
// if (localData) cartStore.$state = JSON.parse(localData);

productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <AppButton @click="cartStore.undo()">Undo</AppButton>
    <AppButton @click="cartStore.redo()">Redo</AppButton>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
        @add-to-cart="cartStore.addItem($event, product.id)"
      />
    </ul>
  </div>
</template>
