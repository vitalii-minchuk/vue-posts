<template>
  <section>
    <h2>Options API Component</h2>
    <p>Counter: {{ counter }}, doubled counter: {{ counter }}</p>
    <input v-model.number="counter" type="text" />
    <button type="button" @click="resetCounter">Reset counter</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '../store/types/actions-types';
import { MutationTypes } from '../store/types/mutations-types';

export default defineComponent({
  name: 'OptionsAPIComponent',
  computed: {
    counter: {
      get() {
        return this.$store.state.counter;
      },
      set(value: number) {
        this.$store.commit(MutationTypes.SET_COUNTER, value);
      },
    },
    doubledCounter() {
      return this.$store.getters.doubledCounter;
    },
  },
  methods: {
    resetCounter() {
      this.$store.commit(MutationTypes.SET_COUNTER, 0);
    },
    async getCounter() {
      const result = await this.$store.dispatch(ActionTypes.GET_COUTNER, 256);
    },
  },
});
</script>
