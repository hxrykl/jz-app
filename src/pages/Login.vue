<template>
    <div class="login">
        <div class="header">
            家政服务平台-顾客端
        </div>
        <div class="form">
            <van-cell-group>
                <van-field
                    v-model="form.username"
                    required
                    clearable
                    label="用户名"
                    placeholder="请输入用户名"
                 />

                <van-field
                    v-model="form.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
            </van-cell-group>
            <div class="btn">
                <van-button size="small" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="loginHandler">登陆</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            form:{
                type:"customer"
            },
        }
    },
    methods:{
        ...mapActions("user",["login"]),
        loginHandler(){
            this.login(this.form)
            .then(()=>{
                //跳转到首页
                this.$router.push({path:'/manager/home'})
            })
        }
    }
}
</script>

<style scoped>
    .header {
        height: 170px;
        background-color:aqua;
        text-align: center;
        line-height: 170px
        
    }
    .form {
        margin-top: 20px
    }
    .btn {
        margin-top: 10px;
        text-align: center
    }
</style>