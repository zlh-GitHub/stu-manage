<template>
    <div class="search">
        <label for="search-word">关键字搜索:</label>
        &nbsp;
        <input type="text" id="search-word" v-model="keyWorld">
        <button id="search-submit" @click="search">搜索</button>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default {
    data() {
       return {
           keyWorld: ""
       }
    },
    methods: {
        search() {
            this.$store.commit("setKeyWorld", this.keyWorld);
            this.$store.dispatch("getStuList", 1)
        }
    }
}
</script>
<style scoped>

</style>