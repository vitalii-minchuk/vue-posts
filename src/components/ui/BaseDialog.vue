<template>
  <teleport to="body">
    <transition name="fade">
      <div class="overlay" v-if="show" @click="hideDialog">
        <div @click.stop class="content">
          <button @click="hideDialog" class="closeBtn">X</button>
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'base-dialog',
  props: {
    show: {
      type: Boolean,
    },
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    },
  },
});
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
}

.content {
  position: relative;
  min-height: 200px;
  max-width: 440px;
  min-width: 300px;
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 15px;
}

.closeBtn {
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
