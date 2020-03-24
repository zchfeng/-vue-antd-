<template>
    <van-nav-bar :title="title" :left-arrow='leftArrow'   @click-left="onClickLeft" @click-right="onClickRight">
        <van-icon name="plus" slot="right" v-if="rightArrow" />
    </van-nav-bar>
</template>
<script>
import { NavBar, Icon } from 'vant';
export default {
    components:{
        [NavBar.name]: NavBar,
        [Icon.name]: Icon
    },
    data(){
        return {}
    },
    props:{
        leftArrow:{
            type:Boolean,
            default:false
        },
        rightArrow:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:'泡泡'
        }
    },
    methods:{
        onClickLeft() {
           this.$router.go(-1)
        },
        onClickRight() {
            console.log(222)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .van-nav-bar
        height 50px
</style>