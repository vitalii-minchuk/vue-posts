<template>
  <form @submit.prevent="submitForm">
    <h3 class="title">Create post</h3>
    <div class="form-control">
      <label for="title"></label>
      <input
        v-focus
        id="title"
        :disabled="!!error"
        class="input"
        type="text"
        placeholder="title"
        v-model.trim="title"
      />
    </div>
    <div lass="form-control">
      <label for="title"></label>
      <textarea
        class="textarea"
        placeholder="text"
        id="title"
        :disabled="!!error"
        rows="5"
        v-model.trim="body"
      ></textarea>
    </div>
    <div class="actions">
      <base-btn type="submit">create</base-btn>
      <p class="error-message" v-if="error">{{ error }}</p>
    </div>
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
        setTimeout(() => this.resetForm(), 2000);
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
<style scoped>
.title {
  margin-bottom: 20px;
  text-align: center;
}

.form-control {
  width: 100%;
  margin-bottom: 20px;
}

.input {
  width: 100%;
  height: 35px;
  padding: 8px;
}

.textarea {
  width: 100%;
  padding: 8px;
}

.actions {
  text-align: right;
  margin: 20px 0;
}

.error-message {
  position: absolute;
  bottom: 20px;
  left: 15px;
}
</style>
