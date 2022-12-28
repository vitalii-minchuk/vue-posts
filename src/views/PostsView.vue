<template>
  <div class="container">
    <section>
      <div>
        <base-btn @click="openDialog">ad post +</base-btn>
        <input type="text" ref="search" />
      </div>
      <div>
        <h3 class="title">Post list</h3>
        <p v-if="fetchError">{{ fetchError }}</p>
        <ul>
          <transition-group class="posts-box" name="post-list" tag="div">
            <post-item
              v-for="(post, index) in posts"
              :key="post.id"
              :post="post"
              :index="index + 1"
            ></post-item>
          </transition-group>
        </ul>
        <div ref="observableDiv">
          <div v-if="loading" class="spinner-box">
            <base-spinner></base-spinner>
          </div>
        </div>
      </div>
      <base-dialog v-model:show="isDialogOpen">
        <post-form></post-form>
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
      currentPage: 1,
    };
  },
  components: {
    PostItem,
    PostForm,
  },
  computed: {
    ...mapGetters(['posts', 'loading', 'fetchError', 'totalPages']),
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch(ActionTypes.GET_POSTS, this.currentPage);
    },
    search() {
      const searchStr = (this.$refs.search as HTMLInputElement).value;
      console.log(searchStr);
      this.$store.dispatch(ActionTypes.HANDLE_SEARCH, searchStr);
    },
    openDialog() {
      this.isDialogOpen = true;
    },
    createObserver() {
      const options = {
        rootMargin: '0px',
        threshold: 1.0,
      };
      const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          this.currentPage += 1;
        }
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(this.$refs.observableDiv as Element);
    },
  },
  mounted() {
    this.fetchPosts();
    this.createObserver();
  },
  watch: {
    currentPage(value) {
      if (value > this.totalPages) {
        return;
      } else {
        this.fetchPosts();
      }
    },
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
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.8s ease;
}

.post-list-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.post-list-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.post-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.post-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.post-list-move {
  transition: transform 0.8s ease;
}
</style>
