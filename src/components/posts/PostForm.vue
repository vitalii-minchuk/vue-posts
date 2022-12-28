<template>
  <form @submit.prevent="submitForm">
    <h3>Create post</h3>
    <div>
      <label for="title"></label>
      <input v-focus id="title" type="text" v-model.trim="title" />
    </div>
    <div>
      <label for="title"></label>
      <textarea id="title" rows="5" v-model.trim="body"></textarea>
    </div>
    <base-btn type="submit">create</base-btn>
    <p v-if="error">{{ error }}</p>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '../../store/types/actions-types';

export default defineComponent({
  name: 'PostForm',
  data() {
    return {
      title: '',
      body: '',
      error: '',
    };
  },
  methods: {
    submitForm() {
      if (this.title && this.body) {
        const newPost = {
          title: this.title,
          body: this.body,
          id: Number(new Date().getTime()),
        };
        this.$store.dispatch(ActionTypes.CREATE_POST, newPost);
        this.resetForm();
      } else {
        this.error = 'Fill up the fields';
      }
    },
    resetForm() {
      this.error = '';
      this.title = '';
      this.body = '';
    },
  },
});
</script>
<style></style>
