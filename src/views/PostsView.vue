<template>
  <div class="container">
    <section>
      <div>
        <base-btn @click="openDialog">ad post +</base-btn>
      </div>
      <div>
        <h3 class="title">Post list</h3>
        <p v-if="fetchError">{{ fetchError }}</p>
        <div v-if="loading" class="spinner-box">
          <base-spinner></base-spinner>
        </div>
        <ul v-else>
          <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
          ></post-item>
        </ul>
      </div>
      <base-dialog v-model:show="isDialogOpen">
        <post-form></post-form>
        <!-- <post-form @create="createPost"></post-form> -->
      </base-dialog>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '../store/types/actions-types';
import PostItem from '../components/posts/PostItem.vue';
import PostForm from '../components/posts/PostForm.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      isDialogOpen: false,
    };
  },
  components: {
    PostItem,
    PostForm,
  },
  computed: {
    ...mapGetters(['posts', 'loading', 'fetchError']),
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch(ActionTypes.GET_POSTS, null);
    },
    openDialog() {
      this.isDialogOpen = true;
    },
  },
  created() {
    this.fetchPosts();
  },
});
</script>
<style scoped>
.title {
  text-align: center;
  margin: 20px 0;
}

.spinner-box {
  width: 290px;
  margin: 0 auto;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
