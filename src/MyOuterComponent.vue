<template>
  <div>
    <h1>This is the outer component</h1>
    <MyInnerComponent :msg="msg" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
// import { resolveComponent } from 'vue';
import MyInnerComponent from './MyInnerComponent.vue';

export default defineComponent({
  name: 'OuterComponent',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  components: { MyInnerComponent }
  // the following code block also does not work...
  // setup: (props) => {
  //   const MyInnerComponent = resolveComponent('MyInnerComponent');
  //   return { MyInnerComponent };
  // },
});
</script>
