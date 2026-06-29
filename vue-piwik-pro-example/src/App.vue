<script setup lang="ts">
import NavigationMenuDrawer from './components/NavigationMenuDrawer.vue'
import ToastStack from './components/ToastStack.vue'
</script>

<template>
  <NavigationMenuDrawer />
  <main class="main-content">
    <router-view />
  </main>
  <ToastStack />
</template>

<style scoped></style>
