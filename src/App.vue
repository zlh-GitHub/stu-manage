<template>
  <div class="wrapper">
    <Header></Header>
    <LeftMenu></LeftMenu>
    <!-- <RightContent></RightContent> -->
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import RightContent from "./components/RightContent"
export default {
  components: {
    Header,
    LeftMenu,
    RightContent
  }
};
</script>
<style scoped>
@import url("./index.css");
</style>