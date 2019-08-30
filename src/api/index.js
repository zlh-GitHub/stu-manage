import axios from "axios";
import urls from "./urls"

const appkey = {
    appkey: "zlhy_1553836760218"
}

const size = 5;

const myAjax = axios.create({
    baseURL: urls.baseUrl,
    params: {
        ...appkey
    },
    method: "get"
})

export default {
    size,
    findByPage(page) {
        return myAjax({
            url: urls.findByPage,
            params: {
                page,
                size
            }
        })
    },
    updateStudent(stu) {
        return myAjax({
            url: urls.updateStu,
            params: stu
        })
    },
    addStudent(stu) {
        return myAjax({
            url: urls.addStu,
            params: stu
        })
    },
    delStuBySno(sNo) {
        return myAjax({
            url: urls.delBySno,
            params: {
                sNo
            }
        })
    },
    searchStu(search, page) {
        return myAjax({
            url: urls.searchStu,
            params: {
                sex: -1,
                search,
                page,
                size
            }
        })
    }
}