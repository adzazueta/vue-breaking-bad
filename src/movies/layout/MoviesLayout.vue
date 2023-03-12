<script setup lang="ts">
import { RouterView } from 'vue-router';
import type { RouterLink } from '@/router/link-routes';

import NavBar from '@/shared/components/NavBar.vue';
import moviesRoute from '@/movies/router';

const routeLinks: RouterLink[] = moviesRoute.children!
  .filter(route => (route.props as { visible: boolean }).visible)
  .map(route => ({
    name: route.name as string,
    path: route.path,
    title: (route.props as { title: string, visible: boolean }).title
  }))
</script>

<template>
  <h1>Movies</h1>

  <!-- Navbar -->
  <NavBar
    :links="routeLinks"
    :show-icon="false"
  />

  <!-- RouterView + Suspense -->
  <RouterView />
</template>

<style scoped></style>
