import MyOuterComponent from './MyOuterComponent.vue';
import MyInnerComponent from './MyInnerComponent.vue';

export default {
  install: (app: any) => {
    app.component('MyInnerComponent', MyInnerComponent);
    app.component('MyOuterComponent', MyOuterComponent);
  },
};
