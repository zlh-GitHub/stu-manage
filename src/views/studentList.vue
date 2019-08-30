<template>
    <div class="student-list content" id="student-list">
        <ListSearch></ListSearch>
        <ListTable></ListTable>
        <TurnPage></TurnPage>
        <transition> 
            <ListModal v-show="$store.state.showModal"></ListModal>
            <!-- <ListModal></ListModal> -->
        </transition>
    </div>
</template>
<style>
    .v-enter{
        top: -100%;
        height: 0;
    }
    .v-enter-to{
        top: 0;
        height: 100%;
    }
    .v-leave{
        top: 0;
        height: 100%;
        opacity: 1;
    }
    .v-leave-to{
        top: -100%;
        height: 0;
        opacity: 0;
    }
    .v-enter-active{
        transition: all .3s;
    }

</style>
<script>
import ListSearch from "../components/studentList/ListSearch"
import ListTable from "../components/studentList/ListTable"
import ListModal from "../components/studentList/ListModal"
import TurnPage from "../components/studentList/TurnPage"
import { mapState,mapMutations } from "vuex"
export default {
    data() {
        return {
        }
    },
    components: {
        ListSearch,
        ListTable,
        ListModal,
        TurnPage
    },
    created: function() {
    },
    computed: {
        ...mapState(["showModal"])
    }
}
</script>
<style scoped>

</style>