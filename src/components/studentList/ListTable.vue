<template>
    <table border="0">
                    <!-- 表头区域 -->
                    <thead>
                        <tr>
                            <th>学号</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>邮箱</th>
                            <th>年龄</th>
                            <th>手机号</th>
                            <th>住址</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <!-- 表格内容 -->
                    <tbody id="student-body">
                        <tr v-for="item in stuList" :key="item.id">
                            <td>{{item.sNo}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.sex ? "女" : "男"}}</td>
                            <td>{{item.email}}</td>
                            <td>{{new Date().getFullYear() - item.birth}}</td>
                            <td>{{item.phone}}</td>
                            <td>{{item.address}}</td>
                            <td>
                                <button class="btn edit" @click="edit(item)">编辑</button>
                                &nbsp;
                                <button class="btn del" @click="del(item)">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
</template>
<script>
import { mapState,mapGetters,mapMutations,mapActions } from "vuex"
export default {
    data() {
        return {
        }
    },
    created() {
        this.$store.dispatch("getStuList", 1);
    },
    methods: {
        ...mapMutations(['changeModal', "setEditStu"]),
        edit(item) {
            this.changeModal();
            this.setEditStu(item);
        },
        del(item){
            window.confirm("确定删除吗？") ? this.$store.dispatch("delStuBySno", item.sNo) : "";
        }
    },
    computed: {
        ...mapState(['stuList'])
    }
}
</script>
<style scoped>

</style>