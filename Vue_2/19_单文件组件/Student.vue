<template>
  <div>
    <h3>学生信息</h3>
        <h1>学生名称:{{name}}</h1>
        <h1>学生年龄:{{age}}</h1>
        <button @click="tip">点击提示</button>
  </div>
</template>
<script>
export default {
  name:'Student',
    data() {
      return {
      name: '张三',
      age: 23
      }
  },
  methods: {
    tip() {
      alert(this.name)
    }
  }
}
</script>

