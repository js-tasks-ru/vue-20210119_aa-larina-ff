import Vue from './vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события

const app = new Vue({
  template: `#app`,

  data() {
    return {
      counterValue: 0,
    };
  },

  methods: {
    handleCountIncrease() {
      this.counterValue++;
    },
  },
});

app.$mount(`#app`);
