<script setup lang="ts">
import { ref } from 'vue';
import moviesApi from '@/api/moviesApi';
import type { TitlesResponse, Movie } from '@/movies/interfaces/movies';
import { useMovies } from '@/movies/composables/useMovies';

// const { data: movies } = await moviesApi.get<TitlesResponse>('/titles'); => With Suspense

const { movies, isLoading, hasError, errorMessage } = useMovies();

</script>

<template>
  <h2 v-if="isLoading">Loading...</h2>
  <h2 v-if="hasError">{{ errorMessage }}</h2>
  <ul>
    <li
      v-for="movie in movies"
      :key="movie.id"
    >
      {{ movie.titleText.text }}
    </li>
  </ul>
</template>

<style scoped></style>
