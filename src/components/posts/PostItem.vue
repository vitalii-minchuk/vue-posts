<template>
  <li class="wrapper">
    <base-card>
      <template #top>
        <h4>{{ post?.title }}</h4>
      </template>
      <template #default>
        <p>{{ post?.id }}</p>
        <p>{{ post?.body }}</p>
      </template>
      <template #bottom>
        <base-btn mode="delete-btn">delete</base-btn>
      </template>
    </base-card>
  </li>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Post } from '../../store/types';

export default defineComponent({
  name: 'PostItem',
  props: {
    post: {
      type: Object as PropType<Post>,
    },
  },
});
</script>
<style scoped>
.wrapper {
  margin-bottom: 15px;
}
</style>
