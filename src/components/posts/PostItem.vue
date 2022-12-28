<template>
  <li class="wrapper">
    <base-card>
      <template #top>
        <h4>{{ post?.title }}</h4>
      </template>
      <template #default>
        <p>{{ index }}</p>
        <p>{{ post?.body }}</p>
      </template>
      <template #bottom>
        <base-btn @click="showDetails">details</base-btn>
        <base-btn @click="deletePost" mode="delete-btn">delete</base-btn>
      </template>
    </base-card>
  </li>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Post } from '../../store/types';
import { ActionTypes } from '../../store/types/actions-types';

export default defineComponent({
  name: 'PostItem',
  props: {
    post: {
      type: Object as PropType<Post>,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    deletePost() {
      if (this.post?.id) {
        this.$store.dispatch(ActionTypes.DELETE_POST, this.post.id);
      }
    },
    showDetails() {
      if (this.post?.id) {
        this.$router.push(`/posts/${this.post?.id}`);
      }
    },
  },
});
</script>
<style scoped>
.wrapper {
  margin-bottom: 15px;
}
</style>
