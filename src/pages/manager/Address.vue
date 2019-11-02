<template>
  <div class="address">
    <!-- 地址列表 -->
      <div class="top">
        <van-row class="tag">
        <van-col span="1"  offset="0" @click="backHandler"></van-col>
        <van-col span="2"  offset="0" @click="backHandler">
            <van-icon  name="arrow-left" style="line-height:20px" />
        </van-col>
        <van-col span="5"  offset="7"  style="color:black"><strong>地址列表</strong></van-col>
        </van-row>
      </div>
      <van-address-list
        v-model="chosenAddressId"
        :list="addresses"
        @add="onAdd"
        @edit="onEdit"
        />
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'Vuex'
export default {
  created(){
    this.findAllAddresses();
  },
  data(){
    return {
        chosenAddressId:"",
    }
  },
  computed:{
    ...mapState('address',['addresses'])
  },
  methods:{
    ...mapActions('address',['findAllAddresses']),
    //返回
    backHandler(){
        this.$router.push({path:'/manager/user'});
    },
    //新增地址
    onAdd() {
      this.$toast('新增地址');
    },
    //编辑地址
    onEdit(item, index) {
      this.$toast('编辑地址:' + index);
    }
  }
}
</script>

<style>
.top > .tag {
    color:blue;
    height:50px;
    line-height: 50px
}
</style>