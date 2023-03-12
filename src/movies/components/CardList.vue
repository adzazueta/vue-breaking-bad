<script setup lang="ts">
import moviesApi from '@/api/moviesApi';

moviesApi.get('/titles')
  .then(response => {
    console.log({ data: response.data })
  });
</script>

<template>
  <ul>
    <li>Hola</li>
    <li>Hola</li>
    <li>Hola</li>
    <li>Hola</li>
  </ul>
</template>

<style scoped></style>
