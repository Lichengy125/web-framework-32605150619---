<template>
  <div>
    <!--插值表达式，读取student.name的数据-->
    <h1>我的第一个Vue应用 - {{ student.name }}</h1>
  </div>
</template>
<!--注意：标签只有 <script>，不要写 setup！！-->
<script>
export default {
  data() {
    return {
      student: { name: '32605150619李职言' }
    }
  }
}
</script>
<style scoped>
h1 {
  color: red;
}
</style>

