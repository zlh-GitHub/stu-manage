<template>
    <div class="tip" v-if="exits" :class="{'show': showTip, 'hide': !showTip, 'success': type == 'success', 'fail': type == 'fail'}">
        <p v-if="type == 'success'" style="color: #6bf1ff">{{msg}}</p>
        <p v-if="type == 'fail'" style="color: #ec1b1b">{{msg}}</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .tip {
        position: fixed;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
    }

    .tip p{
        padding: 10px 70px;
        text-align: center;
        font-weight: bold;
    }

    .success{
        background-color: #f0f9eb;
    }

    .fail {
        background-color: #fef0f0;
    }
    
    .show {
        animation: show .5s;
    }
    
    .hide {
        animation: hide .7s;
    }
    
    @keyframes show {
        0% {
            top: -100%;
        }
        100% {
            top: 40px;
        }
    }
    
    @keyframes hide {
        0% {
            top: 40px;
        }
        100% {
            top: -100%;
        }
    }
</style>