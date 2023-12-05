<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const products = ref<Product[]>([]);

async function fetchProducts(
  limit: number = 100,
  skip: number = 0,
  afterFetched: () => void = () => {}
) {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();
  products.value = data.products;
  afterFetched();
}

fetchProducts(52, 0, () => alert("products fetched"));
</script>
<template>
  <div class="grid grid-cols-4 gap-3">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :thumbnail="product.thumbnail"
      :title="product.title"
      :description="product.description"
    ></ProductCard>
  </div>
</template>
