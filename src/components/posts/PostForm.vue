<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="title"></label>
      <input id="title" type="text" />
    </div>
    <div>
      <label for="title"></label>
      <textarea id="title" rows="5"></textarea>
    </div>
    <base-btn type="submit">create</base-btn>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostForm',
  methods: {
    submitForm() {},
  },
});
</script>
<style></style>
