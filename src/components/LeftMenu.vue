<template>
  <div class="left-menu">
    <dl id="menu">
      <dt>学生管理</dt>
      <router-link to="/studentlist" tag="dd">学生列表</router-link>
      <router-link to="/addstudent" tag="dd">新增学生</router-link>
    </dl>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>