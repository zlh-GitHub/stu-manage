<template>
    <ul id="turn-page" class="turn-page">
        <li class="prev-page" @click="turnPage(-2)">上一页</li>
        <template v-if="totalPage <= 7">
            <li v-for="i in totalPage" :key="i" class="tcdNumber" :class="{'cur-page': i == nowPage}" @click="turnPage(i)">{{i}}</li>
        </template>
        <template v-if="totalPage > 7">
<!-- 1. nowPage <= 4:   1 2 3 4 5 6 ... totalPage
2. nowPage > 4: 1 ...
3. 4 < nowPage < totalPage -4:  nowPage-2  nowPage-1  nowPage  nowPage+1  nowPage+2
4. nowPage < totalPage - 4:  ... totalPage
5. nowPage >= totalPage -4:  1 ... totalPage-5 totalPage-4 totalPage-3 totalPage-2 totalPage-1 totalPage --> 
            <template v-if="nowPage <=4">
                <li v-for="i in 6" :key="i" :class="{'cur-page': i == nowPage}" @click="turnPage(i)">{{i}}</li>
            </template>
            <template v-if="nowPage > 4">
                <li @click="turnPage(1)">1</li>
                <span>...</span>
            </template> 
            <template v-if="nowPage > 4 && nowPage <totalPage - 4">
                <li v-for="i in 5" :key="nowPage -3 + i" :class="{'cur-page': nowPage -3 + i == nowPage}" @click="turnPage(nowPage -3 + i)">{{nowPage - 3 + i}}</li>
            </template>  
            <template v-if="nowPage < totalPage - 4">
                <span>...</span>
                <li @click="turnPage(totalPage)" :class="{'cur-page': totalPage == nowPage}">{{totalPage}}</li>
            </template>         
            <template v-if="nowPage >= totalPage - 4">
                <li v-for="i in 6" :key="totalPage + i - 6" :class="{'cur-page': totalPage + i - 6 == nowPage}" @click="turnPage(totalPage + i - 6)">{{totalPage + i - 6}}</li>
            </template>
        </template>
        <li class="next-page" @click="turnPage(-1)">下一页</li>
    </ul>
</template>
<script>
import {mapState} from "vuex"
export default {
    data() {
        return {
        }
    },
    methods: {
        turnPage(num) {
            //num==-2上一页  num==-1下一页
            this.$store.dispatch("getStuList", num);
        }
    },
    computed: {
        ...mapState(['nowPage', "totalPage"])
    }
}
</script>
<style scoped>
    .turn-page{
        user-select: none;
    }
</style>