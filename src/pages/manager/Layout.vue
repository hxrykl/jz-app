<template>
    <div class="layout">
        <router-view></router-view>
        <div>
            <!-- <router-link to="/home">首页</router-link>
            <router-link to="/order">订单</router-link>
            <router-link to="/">我的</router-link> -->
            <van-tabbar v-model="active" @change="tabChangeHandler">
                <van-tabbar-item name="/manager/home" icon="wap-home-o">首页</van-tabbar-item>
                <van-tabbar-item name="/manager/order" icon="bag-o">订单</van-tabbar-item>
                <van-tabbar-item name="/manager/user" icon="contact">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        created(){
            if(this.token){
                //查询info
                this.getInfo(this.token);
            } else {
                //跳转到登录
                this.$toast('token失效');
                this.$router.push({path:'/login'});
            }
        },
        data() {
            return {
                active:0
            }
        },
        computed:{
            ...mapState('user',['token','info'])
        },
        methods:{
            ...mapActions('user',['getInfo']),
            tabChangeHandler(path) {
                this.$router.push({path})
            }
        }
    }
</script>