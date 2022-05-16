

<!-- 直接写模板 -->
<template>
  <div>
    <!-- 使用组件 -->
    <School></School>
    <Student></Student>
  </div>
</template>


<script>
  // 引入组件
  import School from './School.vue'
  import Student from './Student.vue'

  //暴露组件配置对象
  export default {
    name:'App',
    //注册组件
    methods: {
      School,
      Student
    }
  }
</script>

