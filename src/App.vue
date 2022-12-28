<script lang="ts">
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>

<template>
  <the-header></the-header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div :key="key">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

.container {
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}

.active-route-link {
  color: brown;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
