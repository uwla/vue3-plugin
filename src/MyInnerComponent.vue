<template>
  <div>
    <h2>This is the inner component</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MyInnerComponent',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
});
</script>
