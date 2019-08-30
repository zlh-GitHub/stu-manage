<template>
    <div class="modal" id="modal">
                    <div class="mask" @click="changeModal"></div>
                    <div class="modal-content">
                        <h2>编辑信息</h2>
                        <form action="#" id="edit-student-form" class="add-student-form">
                            <div>
                                <label for="name">姓名</label>
                                <input :value="editStu.name" type="text" name="name" autocomplete="off" @input="changeStu('name', $event.target.value)" ref="name">
                            </div>
                            <div class="sex">
                                <label for="sex">性别</label>
                                <input :value="editStu.sex" type="radio" name="sex" :checked="editStu.sex == 0" @click="changeStu('sex', 0)" ref="sex">
                                <span>男</span>
                                <input :value="editStu.sex" type="radio" name="sex" :checked="editStu.sex != 0" @click="changeStu('sex', 1)"><span>女</span>
                            </div>
                            <div>
                                <label for="sNo">学号</label>
                                <input :value="editStu.sNo" type="text" name="sNo" @input="changeStu('sNo', $event.target.value)" ref="sNo">
                            </div>
                            <div>
                                <label for="email">邮箱</label>
                                <input :value="editStu.email" type="text" name="email" @input="changeStu('email', $event.target.value)" ref="email">
                            </div>
                            <div>
                                <label for="birth">出生年</label>
                                <input :value="editStu.birth" type="text" name="birth" @input="changeStu('birth', $event.target.value)" ref="birth">
                            </div>
                            <div>
                                <label for="phone">手机号</label>
                                <input :value="editStu.phone" type="text" name="phone" @input="changeStu('phone', $event.target.value)" ref="phone">
                            </div>
                            <div>
                                <label for="address">住址</label>
                                <input :value="editStu.address" type="text" name="address" @input="changeStu('address', $event.target.value)" ref="address">
                            </div>
                            <div>
                                <label for=""></label>
                                <input type="button" value="提交" class="btn" id="edit-submit" @click="commit">
                                <input type="button" value="重置" class="btn" @click="reset">
                            </div>
                        </form>
                    </div>
                </div>
</template>
<script>
import {mapMutations,mapState,mapActions} from "vuex"
export default {
    data() {
        return{
            stu: {}
        }
    },
    computed: {
        ...mapState(['editStu'])
    },
    methods: {
        ...mapMutations(['setEditStu']),
        ...mapActions(["updateStu"]),
        changeModal() {
            this.$store.commit("changeModal");
        },
        changeStu(key, value) {
            this.stu[key] = value;
        },
        commit() {
            var newStu = Object.assign({}, this.editStu, this.stu);
            // this.$api.updateStudent(newStu).then((result) => {
            //     console.log(result);
            // })
            this.updateStu(newStu).then( result => {
                this.$alert(result);
                this.changeModal();
            }).catch( err => {
                // console.log(err);
                this.$alert(err);
            });
        },
        reset() {
            // console.log(this.$refs);
            for( var prop in this.$refs){
                if(prop != "sex"){
                    this.stu[prop] = this.$refs[prop].value = "";
                }else{
                    this.stu[prop] = 0;
                    this.$refs[prop].checked = true;
                }
            }
        }
    }
}
</script>
<style scoped>

</style>