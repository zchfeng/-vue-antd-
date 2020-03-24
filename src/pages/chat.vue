<template>
    <div id="chat">
        <HeaderTitle :leftArrow='true' :title='title'></HeaderTitle>
        <div class="content">
            <div class="list">
                <div class="list-content" v-for="(item,index) in list" :key="index" :class="item.position">
                    <van-image
                        width="50"
                        height="50"
                        :src="item.img"
                    />
                    <div class="Bubble">
                        <div>{{item.news}}</div>
                    </div>
                </div>
            </div>
            <div class="input">
                <van-field
                    v-model="chatValue"
                    center
                    border	
                    >
                    <template #button>
                        <van-button size="small" @click.top="send" type="primary">发送信息</van-button>
                    </template>
                </van-field>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderTitle from '@/components/header.vue'
import { Field ,Button ,Image  } from 'vant';
export default {
    components:{
        HeaderTitle,
        [Field.name]: Field,
        [Button.name]: Button,
        [Image.name]: Image
    },
    data(){
        return {
            title:'',
            chatValue:'',
            list:[
                {
                    position:'left',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    news:'232323232'
                },{
                    position:'left',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    news:'232323232https://img.yzcdn.cn/vant/cat.jpeghttps://img.yzcdn.cn/vant/cat.jpeghttps://img.yzcdn.cn/vant/cat.jpeg'
                },
                {
                    position:'right',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    news:'232323232https://img.yzcdn.cn/vant/cat.jpeghttps://img.yzcdn.cn/vant/cat.jpeghttps://img.yzcdn.cn/vant/cat.jpeghttps://img.yzcdn.cn/vant/cat.jpeg'
                },
                {
                    position:'right',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    news:'232323232'
                }
            ]
        }
    },
    created(){
        this.title= this.$route.query.name || '泡泡'   
    },
    methods:{
        send(){
            console.log(this.chatValue,'发送消息')
        }
    }
    
}
</script>
<style scoped lang="stylus">
    #chat .content
        height: calc(100vh - 50px);
        box-sizing: border-box;
        position: relative;
        .list
            padding 20px
            height calc(100vh - 100px);
            box-sizing border-box 
            overflow-y auto
            .list-content
                display flex
                margin-bottom 20px
            .van-image
                min-width 50px
                min-height 50px
            .Bubble
                font-size 14px
                position relative
                flex 1
                div
                    background-color #a5d7ff
                    border solid 1px #85c7fb
                    border-radius  3px
                    padding 10px
                    word-break break-all
                    &:before
                        content ""
                        position absolute
                        z-index 2
                        float: left;
                        width: 0; 
                        height: 0;
                        border-width: 10px;
                        border-style: solid;
                        border-color: transparent #a5d7ff transparent transparent;
            .left
                .Bubble
                    margin-left 10px
                    div
                        float left
                        &:before
                            transform: rotate(0deg);
                            left -19px
            .right
                .Bubble
                    order -1
                    margin-right 10px
                    div
                        float right 
                        &:before
                            transform: rotate(-180deg);
                            right -19px
    .input{
        border-top: solid 1px #ccc ;
        height: 50px;
        position: absolute;
        bottom: 0px;
        width: 100%;
        box-sizing: content-box;
    }
    >>>
        .van-field__control{
            border: 1px solid #999
        }
</style>