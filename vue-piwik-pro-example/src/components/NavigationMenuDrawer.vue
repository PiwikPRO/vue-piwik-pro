<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavigationLinks from './NavigationLinks.vue'

const isOpen = ref(false)
const route = useRoute()
const isNotHomePage = ref(route.path !== '/')

watch(
  () => route.path,
  (value) => {
    isNotHomePage.value = value !== '/'
    isOpen.value = false
  }
)
</script>

<template>
  <div v-if="isNotHomePage">
    <button class="menu-toggle" aria-label="Open menu" @click="isOpen = true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        width="20"
        height="20"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>

    <Teleport to="body">
      <Transition name="overlay">
        <div v-if="isOpen" class="drawer-overlay" @click="isOpen = false" />
      </Transition>
      <Transition name="drawer">
        <aside v-if="isOpen" class="drawer">
          <button
            class="drawer-close"
            aria-label="Close menu"
            @click="isOpen = false"
          >
            &times;
          </button>
          <NavigationLinks />
        </aside>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.menu-toggle {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 50;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #22c55e;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background 0.15s;
}
.menu-toggle:hover {
  background: #16a34a;
}

.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 280px;
  max-width: 80vw;
  background: #fff;
  z-index: 101;
  padding: 16px;
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.12);
  overflow-y: auto;
}

.drawer-close {
  display: block;
  margin-left: auto;
  margin-bottom: 12px;
  background: none;
  border: none;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  color: #6b7280;
}
.drawer-close:hover {
  color: #111827;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.2s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.2s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}
</style>
