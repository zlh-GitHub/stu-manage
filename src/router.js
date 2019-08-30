import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: "/addStudent",
            name: "addStudent",
            component: () =>
                import ("./views/addStudent.vue")
        },
        {
            path: "/studentList",
            name: "studentList",
            component: () =>
                import ("./views/studentList.vue")
        },
        {
            path: "*",
            redirect: "/studentList"
        }
    ],
    linkActiveClass: "active"
})