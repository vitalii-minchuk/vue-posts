<template>
  <div class="container">
    <section>
      <router-link to="/">back home</router-link>
      <h3 class="title">Post: {{ id }}</h3>
      <base-card>
        <template #top>
          <h4>{{ post?.title }}</h4>
        </template>
        <template #bottom>
          <p>{{ post?.body }}</p>
        </template>
      </base-card>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SinglePost',
  props: ['id'],
  computed: {
    post() {
      const postId = this.id || this.$route.params;
      return this.$store.getters.post(Number(postId));
    },
  },
});
</script>
<style scoped>
.title {
  text-align: center;
  margin: 20px 0;
}
</style>
