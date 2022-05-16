<template>
  <div>
    <h3>学校信息</h3>
        <h1>学校名:{{name}}</h1>
        <h1>学校地址:{{address}}</h1>
  </div>
</template>
<script>
export default {
  name:'School',
  data() {
    return {
    name: '宁大科院',
    address :'慈溪'
    }
  },
}
</script>