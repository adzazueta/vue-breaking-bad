<script setup lang="ts">
import moviesApi from '@/api/moviesApi'
import type { TitlesResponse } from '@/movies/interfaces/movies';

moviesApi.get<TitlesResponse>('/titles')
  .then(response => {
    const movieTitle = response.data.results[0].titleText.text;
    console.log({ title: movieTitle });
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
