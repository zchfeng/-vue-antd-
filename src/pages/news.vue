<template>
    <div>
        <header-title :rightArrow='true'></header-title>
        <van-swipe-cell v-for="(item,index) in list" :key="index" @click.native.stop="goto(item)">
            <van-cell center :title="item.name" :value="item.time" :label="item.news" :icon="item.img">
            </van-cell>
            <van-button
                slot="right"
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click.top="close(index)"
            />
        </van-swipe-cell>
    </div>
</template>
<script>
import HeaderTitle from '@/components/header.vue'
import { SwipeCell, Card,Button,Cell } from 'vant';
export default {
    components: {
        HeaderTitle,
        [SwipeCell.name]: SwipeCell,
        [Card.name]: Card,
        [Button.name]: Button,
        [Cell.name]: Cell
    },
    data(){
        return {
            list:[{
                time:'刚刚',
                name:'22222',
                news:'lalallal',
                img:'https://img.yzcdn.cn/vant/leaf.jpg'
            },{
                time:'刚刚',
                name:'3333',
                news:'lalallal',
                img:'https://img.yzcdn.cn/vant/leaf.jpg'
            },{
                time:'刚刚',
                name:'4444444',
                news:'lalallal',
                img:'https://img.yzcdn.cn/vant/leaf.jpg'
            },{
                time:'刚刚',
                name:'66666666',
                news:'lalallal',
                img:'https://img.yzcdn.cn/vant/leaf.jpg'
            },{
                time:'刚刚',
                name:'888888',
                news:'lalallal',
                img:'https://img.yzcdn.cn/vant/leaf.jpg'
            }]
        }
    },
    methods:{
        goto(item){
            this.$router.push({path:'/chat',query:{name:item.name}})
        },
        close(index){
            this.list.splice(index,1)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .van-swipe-cell {
        position relative
    }
    .van-cell__left-icon
        max-width 50px
        height 50px
        .van-icon__image
            width 50px
            height 50px
    .delete-button
        height: 100%;
</style>