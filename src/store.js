import Vue from 'vue'
import Vuex from 'vuex'
import api from "./api"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showModal: false,
        editStu: {},
        stuList: [],
        count: 0,
        totalPage: 0,
        nowPage: 1,
        keyWorld: ""
    },
    mutations: {
        changeModal(state) {
            state.showModal = !state.showModal;
        },
        setEditStu(state, stu) {
            state.editStu = stu;
        },
        turnPage(state, num) {
            if (num == -2 && state.nowPage > 1) {
                state.nowPage--;
            } else if (num == -1 && state.nowPage < state.totalPage) {
                state.nowPage++;
            } else if (num != -1 && num != -2) {
                state.nowPage = num;
            }
        },
        setCount(state, count) {
            state.count = count;
            state.totalPage = Math.ceil(state.count / api.size);
        },
        setKeyWorld(state, keyWorld) {
            state.keyWorld = keyWorld;
        },
        setStuList(state, stuList) {
            state.stuList = stuList;
        }
    },
    actions: {
        updateStu(context, stu) {
            return api.updateStudent(stu).then((result) => {
                return new Promise((resolve, reject) => {
                    if (result.data.status == "success") {
                        resolve({
                            type: "success",
                            msg: result.data.msg
                        })
                        Object.assign(context.state.editStu, stu);
                        //editStu 是在 stuList中的一个item里面一直传过来的，只要改变了editStu，stuList也就发生改变，视图也就重新渲染了，就没必要重新触发一次请求拉取数据，直接使用本地数据 
                    } else {
                        reject({
                            type: "fail",
                            msg: result.data.msg
                        })
                    }
                })
            })
        },
        getStuList({ state, commit }, n) {
            if (n) {
                commit("turnPage", n);
            }

            if (state.keyWorld != "") {
                api.searchStu(state.keyWorld, state.nowPage).then(result => {
                    commit("setStuList", result.data.data.searchList);
                    commit("setCount", result.data.data.cont);
                })
            } else {
                api.findByPage(state.nowPage).then((result) => {
                    commit("setStuList", result.data.data.findByPage);
                    commit("setCount", result.data.data.cont);
                });
            }
        },
        delStuBySno(context, sno) {
            api.delStuBySno(sno).then(result => {
                if (result.data.status == "success") {
                    if (context.state.nowPage > Math.ceil(context.state.count - 1) / 5) {
                        context.dispatch("getStuList", context.state.nowPage - 1)
                    } else {
                        context.dispatch("getStuList")
                    }
                }
            })
        }
    }
})