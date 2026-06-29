<script setup lang="ts">
import { routes } from '../routes'

const links = routes.filter((route) => route.path !== '/')
</script>

<template>
  <nav class="nav-list">
    <router-link
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="nav-link"
    >
      {{ link.name }}
    </router-link>
  </nav>
</template>

<style scoped>
.nav-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.nav-link {
  display: block;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  color: #374151;
  font-size: 15px;
}
.nav-link:hover {
  background: #f3f4f6;
  color: #111827;
  text-decoration: none;
}
.nav-link.router-link-active {
  background: #f3f4f6;
  color: #111827;
  font-weight: 500;
}
</style>
