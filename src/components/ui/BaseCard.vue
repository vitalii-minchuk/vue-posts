<template>
  <div class="card-wrapper">
    <div v-if="$slots.top" class="top">
      <slot name="top"></slot>
    </div>
    <div v-if="$slots.default" class="default">
      <slot name="default"></slot>
    </div>
    <div v-if="$slots.bottom" class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'base-card',
});
</script>
<style scoped>
.card-wrapper {
  padding: 20px;
  margin: 0 auto;
  min-width: 300px;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 3px 3px 7px gray;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.default {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.bottom {
  text-align: right;
}
</style>
