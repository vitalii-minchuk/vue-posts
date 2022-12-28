<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue';
</script>

<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
