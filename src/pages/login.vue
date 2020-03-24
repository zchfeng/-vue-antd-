<template>
    <div id="login">
        <div class="title">登录泡泡</div>
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
                :rules="[{ required: true, message: '请填写密码' },{ validator: asyncValidator, message: '密码或用户名不正确' }]"
            />
            <span class="register" @click.stop="register">
                注册账号
            </span>
            <div  style="margin: 16px;">
                <van-button round block type="info" native-type="submit" size="large">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import { Form,Field,Button ,Toast } from 'vant';
export default {
    components:{
        [Form.name]: Form,
        [Field.name]: Field,
        [Button.name]: Button,
        [Toast.name]:Toast 
    },
    data(){
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        // 异步校验函数返回 Promise
    asyncValidator(val) {
       
      return new Promise(resolve => {
        Toast.loading('验证中...');
        setTimeout(() => {
          Toast.clear();
          resolve(this.password==123456);
        }, 1000);
      });
    },
        onSubmit(values) {
             this.$router.push('/')
        },
        register(){
            this.$router.push('/register')
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