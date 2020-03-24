<template>
    <div id="home">
        <section>
            <router-view></router-view>
        </section>
        <van-tabbar v-model="active" @change="onChange">
            <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item icon="friends-o">通讯录</van-tabbar-item>
            <van-tabbar-item icon="search">搜索</van-tabbar-item>
            <van-tabbar-item icon="user-o">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    components:{
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    data(){
        return {
            active:0
        }
    },
    created(){
        switch(this.$route.path){
            case '/address':
                this.active=1
                break
            case '/':
                this.active=0
                break
        }
    },
    methods:{
        onChange(active){
            console.log(active)
            switch(active){
                case 0:
                    this.$router.push('/')
                    break
                case 1:
                    this.$router.push('address')
                    break
            }
        }
    }
    
}
</script>
<style scoped>
    #home{
        position: relative;
        height: 100vh;
    }
    .van-tabbar{
        position: absolute;
        bottom: 0;
        height: 50px;
        border-top:solid 1px #999;
    }
    .van-tabbar-item div{
        font-size: 40px;
    }
    section{
        height: calc(100vh - 50px);
        overflow: auto;
    }
</style>