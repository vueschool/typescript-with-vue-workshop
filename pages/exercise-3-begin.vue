<script setup lang="ts">
// you must complete this based on the shape of the data
// from the dummyjson API
interface Product {}

// you must correctly type this
const products = ref([]);

// you must make this fetch the data and correctly define with TS
function fetchProducts(limit, skip) {}

// you must pass this the proper arguments
fetchProducts();
</script>

<template>
  <div class="grid grid-cols-4 gap-3">
    <!-- You must print a product card per product fetched 
      instead of these hardcode product cards -->
    <ProductCard
      title="Macbook Pro"
      thumbnail="https://i.dummyjson.com/data/products/6/thumbnail.png"
      description="MacBook Pro 2021 with mini-LED display may launch between September, November"
    />
    <ProductCard
      title="Samsung Galaxy Book"
      thumbnail="https://i.dummyjson.com/data/products/7/thumbnail.jpg"
      description="Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched"
    />
    <ProductCard
      title="Microsoft Surface Laptop 4"
      thumbnail="https://i.dummyjson.com/data/products/8/thumbnail.jpg"
      description="Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen."
    />
    <ProductCard
      title="Infinix INBOOK
"
      thumbnail="https://i.dummyjson.com/data/products/9/thumbnail.jpg"
      description="Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty"
    />
  </div>
</template>
