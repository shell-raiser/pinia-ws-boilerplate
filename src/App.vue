<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
//import products from "@/data/products.json";

import { useProductStore } from "./stores/ProductStore";
const productStore = useProductStore();
const products = productStore.products
console.log(productStore.products)

</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>
