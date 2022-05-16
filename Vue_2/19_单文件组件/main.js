//引入App组件
import App from './App.vue'

//创建vm
new Vue({
  el: '#root',
  template: `
    <App></App>
  `,
  //注册App组件
  components: {
    App
  }
})
