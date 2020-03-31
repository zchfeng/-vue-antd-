<template>
    <div id="login">
        <div class="title">注册泡泡</div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="password2"
                type="password"
                name="password2"
                label="确认密码"
                placeholder="确认密码"
                :rules="[{ required: true, message: '请填写确认密码' }]"
            />
            <div class="register" @click.stop="login">
                已有账号，点击这里登录
            </div>
            <div  style="margin: 16px;">
                <van-button round block type="primary" native-type="submit" size="large">
                    注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import { Form,Field,Button } from 'vant';
export default {
    components:{
        [Form.name]: Form,
        [Field.name]: Field,
        [Button.name]: Button
    },
    data(){
        return {
            username: '',
            password: '',
            password2:''
        }
    },
    methods: {
        onSubmit(values) {
            this.$api.post('/register',values,response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response.data);
                } else {
                    console.log(response.message);
                }})
        },
        login(){
            this.$router.push('/login')
        }
    }
    
}
</script>
<style lang="css" scoped>
    #login .title{
        font-size: 30px;
        margin: 50px auto;
        font-weight: bold;
        text-align: center;
    }
    .register{
        color: #0060a0;
        font-size: 14px;
        padding: 5px 16px;
        text-align: left;
        cursor: pointer;
    }
</style>