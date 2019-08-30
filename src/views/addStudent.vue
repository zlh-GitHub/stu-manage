<template>
    <div class="add-student content" id="add-student">
                <form action="#" id="add-student-form"  class="add-student-form">
                    <div>
                        <label for="name">姓名</label>
                        <input type="text" name="name" autocomplete="off" v-model="addStu.name">
                    </div>
                    <div class="sex">
                        <label for="sex">性别</label>
                        <input type="radio" name="sex" value="0" v-model="addStu.sex">
                        <span>男</span>
                        <input type="radio" name="sex" value="1" v-model="addStu.sex"><span>女</span>
                    </div>
                    <div>
                        <label for="sNo">学号</label>
                        <input type="text" id="sNo" name="sNo" v-model="addStu.sNo">
                    </div>
                    <div>
                        <label for="email">邮箱</label>
                        <input type="text" id="email" name="email" v-model="addStu.email">
                    </div>
                    <div>
                        <label for="birth">出生年</label>
                        <input type="text" id="birth" name="birth" v-model="addStu.birth">
                    </div>
                    <div>
                        <label for="phone">手机号</label>
                        <input type="text" id="phone" name="phone"  v-model="addStu.phone">
                    </div>
                    <div>
                        <label for="address">住址</label>
                        <input type="text" id="address" name="address"  v-model="addStu.address">
                    </div>
                    <div>
                        <label for=""></label>
                        <input type="button" value="提交" class="btn" id="add-submit" @click="addStudent">
                        <input type="button" value="重置" class="btn" @click="reset">
                    </div>
                </form>
            </div>
</template>
<script>
export default {
    data() {
        return {
            addStu: {
                name: "",
                sNo : "",
                email: "",
                birth: "",
                phone: "",
                address: "",
                sex: 0
            }
        }
    },
    methods: {
        addStudent() {
            this.$api.addStudent(this.addStu).then((result) => {
                if(result.data.status == "success"){
                    this.$alert({msg: result.data.msg, type: "success"});
                    this.$router.push("/studentList");
                }else{
                    this.$alert({msg: result.data.msg, type: "fail"});
                }
            })
        },
        reset() {
            this.addStu = {};
        }
    }
}
</script>
<style scoped>

</style>