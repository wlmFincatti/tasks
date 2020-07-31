import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('textCustom', {
  bind(el, binding) {
    if (binding.modifiers['tempo']) {
      setTimeout(() => {
        el.style.textAlign = binding.value
        el.style.color = 'white'
      }, 1000);
    } else {
      el.style.textAlign = binding.value
      el.style.color = 'white'
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
