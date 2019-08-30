<template>
    <div class="right-content">
        <router-view></router-view>
    </div>
</template>
<script>
import addStudent from "../views/addStudent";
import studentList from "../views/studentList";
export default {
    components: {
        addStudent,
        studentList
    }
}
</script>
<style scoped>

</style>