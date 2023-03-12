<script setup lang="ts">
import { ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import moviesApi from '@/api/moviesApi';
import { useMovies } from '@/movies/composables/useMovies';

import type { TitlesResponse, Movie } from '@/movies/interfaces/movies';

// 1- Normal suspense
// const { data: movies } = await moviesApi.get<TitlesResponse>('/titles');

// 2- Composable functions
// const { movies, isLoading, hasError, errorMessage } = useMovies();

// 3- TanStack Query
const getMoviesSlow = async (): Promise<Movie[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const { data } = await moviesApi.get<TitlesResponse>('/titles');
      resolve(data.results);
    }, 3000);
  })
}

const { isLoading, isError, data: movies, error } = useQuery(
  ['movies'],
  getMoviesSlow,
  {
    cacheTime: 1000 * 60,
    refetchOnReconnect: 'always'
  }
);

</script>

<template>
  <h2 v-if="isLoading">Loading...</h2>
  <h2 v-if="isError">{{ error }}</h2>
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
