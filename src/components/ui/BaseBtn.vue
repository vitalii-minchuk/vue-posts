<template>
  <router-link v-if="link" :to="to" class="base-btn" :class="mode">
    <slot></slot>
  </router-link>
  <button v-else class="base-btn" :class="mode">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'base-btn',
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
    mode: {
      type: String,
      required: false,
      default: '',
    },
  },
});
</script>
<style scoped>
.base-btn {
  padding: 4px 16px;
  font-size: 12px;
  text-transform: uppercase;
  border: 1px solid plum;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;
  white-space: nowrap;
}

.base-btn:hover,
.base-btn:active {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: rgba(0, 0, 0, 0.15);
}

.delete-btn {
  background-color: pink;
}

.text-btn {
  text-transform: capitalize;
  background-color: transparent;
  border-color: transparent;
  color: orchid;
}

.selected-btn {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: rgba(0, 0, 0, 0.5);
  color: antiquewhite;
}
</style>
