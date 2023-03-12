import { onMounted, ref } from 'vue';
import axios from 'axios';
import moviesApi from '@/api/moviesApi';

import type { Movie, TitlesResponse } from '@/movies/interfaces/movies';

const movies = ref<Movie[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>('');

export const useMovies = () => {
  const loadMovies = async () => {
    if (movies.value.length > 0) return;
    isLoading.value = true;

    try {
      const { data } = await moviesApi.get<TitlesResponse>('/titles');
      movies.value = data.results;
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      
      if (axios.isAxiosError(error)) {
        return errorMessage.value = error.message;
      }

      errorMessage.value = JSON.stringify(error);
    }
  }

  onMounted(async () => {
    await loadMovies();
  });

  return {
    movies,
    isLoading,
    hasError,
    errorMessage
  };
};
