import type { RouteRecordRaw } from "vue-router";

import MovieLayout from "@/movies/layout/MoviesLayout.vue";
import MovieId from "@/movies/pages/MovieId.vue";
import MovieList from "@/movies/pages/MovieList.vue";
import MovieSearch from "@/movies/pages/MovieSearch.vue";

const moviesRoute: RouteRecordRaw = {
  path: '/movies',
  redirect: '/movies/list',
  component: MovieLayout,
  children: [
    {
      path: 'by/id',
      name: 'movie-id',
      props: { title: 'By Id', visible: false },
      component: MovieId
    },
    {
      path: 'list',
      name: 'movie-list',
      props: { title: 'List', visible: true },
      component: MovieList
    },
    {
      path: 'search',
      name: 'movie-search',
      props: { title: 'Search', visible: true },
      component: MovieSearch
    }
  ]
}

export default moviesRoute
