<template>
  <header class="header">
    <div class="container">
      <div class="wrapper">
        <h3>
          <router-link to="/">LOGO</router-link>
        </h3>
        <nav>
          <router-link to="/posts">Posts</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TheHeader',
});
</script>
<style scoped>
.header {
  background-color: #ccc;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
}
</style>
