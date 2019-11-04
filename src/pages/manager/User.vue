<template>
    <div class="user" >
        <div style="background-color:#04bfa6;color:#fff;font-size:16px;">
            <div class="top">
                我的
            </div>
            <div class="photo">
                <van-image round width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="name">
                {{info.name}}
            </div>
        </div>
        <div class="address" style="height:50px;">
            <!-- <van-row>
                <van-col style="height:50px;"   offset="3" @click="toMyAddress">常用地址</van-col>
            </van-row> -->
            <div  @click="toMyAddress">常用地址</div>
        </div>
        <!-- <van-divider /> -->
        <div class="logout" style="height:50px;">
            <div  @click="logoutHandler">退出</div>
            <!-- <van-row>
                <van-col  offset="3" @click="logoutHandler">退出</van-col>
            </van-row> -->
        </div>
        <!-- <van-divider /> -->
    </div>
</template>
<script>    
import {mapState,mapActions} from 'Vuex'
export default {
    created(){
        this.getInfo(this.token);
    },
    date(){
        return {

        }
    },
    computed:{
        ...mapState('user',['info','token'])
    },
    methods:{
        ...mapActions('user',['logout','getInfo']),
        toMyAddress(){
            this.$router.push({path:'/address'});
        },
        logoutHandler(){
            this.logout()
            .then(()=>{
                this.$router.push({path:'/login'})
            })
        }
    }
}
</script>
<style scoped>
.top {
    height: 50px;
    text-align: center;
    line-height: 50px
}
.photo {
    text-align: center
}
.name {
    text-align: center;
    height: 30px;
    line-height: 30px
}
.address > div,
.logout > div {
    line-height:3em;
    font-size:16px;
    border-bottom:1px solid #cdcdcd;
}
</style>