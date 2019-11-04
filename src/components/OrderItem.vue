<template>
  <div class="order_item">
    <van-row class="header"> 
      <van-col span="12">订单编号：{{data.id}}</van-col>
      <van-col span="12" class="status">{{data.status}}</van-col>
    </van-row>
    <van-row>
      <!-- <van-col :span="6">
        <img src="../image/c1.jpg" alt="">
      </van-col> -->
      <van-col :span="18" :offset="2">
        <div>接单员：{{data.waiter.realname}}</div>
        <div>服务时间：{{data.orderTime | datefmt }}</div>
        <div v-if='data.address'>服务地址：{{data.address.province}} {{data.address.city}} {{data.address.area}} {{data.address.address}}</div>
        <div  v-if='data.waiter'>联系方式：{{data.waiter.telephone}}</div>
      </van-col>
      <van-col :span="4">
        <button v-if="data.status == '待确认'">完成</button>
        <button v-else-if="data.status == '待服务'" >取消</button>

      </van-col>
    </van-row>
    <div class="text-right">
      全部服务合计￥ {{data.total}}
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data:{type:Object}
  }
}
</script>
<style scoped>

.order_item {
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #ffffff;
}
.order_item .header {
  line-height: 2.5em;
  font-size: 14px;
}
.order_item .header .status {
  text-align: right;
  font-size: 12px;
  color: #fd621f;
}
.order_item img {
  width: 100%;
  border-radius: 3px;
}
button {
  margin:32px 0px 0px 10px;
  padding:5px 10px;
  background-color: #fff;
  color: #fac775;
  border: 1px solid #fac775;
  border-radius: 5px;
}


</style>