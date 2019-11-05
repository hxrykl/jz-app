<template>
  <div class="order">
    <van-nav-bar title="我的订单" style="background-color:#04bfa6;position:fixed;width:100% ;"/>
    <van-tabs v-model="active">
      <van-tab title="全部">
        <briup-order-item v-for='order in orders' :key="order.id"  :data='order'></briup-order-item>
      </van-tab>
      <van-tab title="待支付">
        <briup-order-item v-for='order in ordersStatusFilter("待支付")' :key="order.id"  :data='order'></briup-order-item>
      </van-tab>
      <van-tab title="待服务">
         <briup-order-item v-for='order in ordersStatusFilter("待派单")' :key="order.id"  :data='order'></briup-order-item>
         <briup-order-item v-for='order in ordersStatusFilter("待接单")' :key="order.id"  :data='order'></briup-order-item>
         <briup-order-item v-for='order in ordersStatusFilter("待服务")' :key="order.id"  :data='order'></briup-order-item>
      </van-tab>
      <van-tab title="待确认">
        <briup-order-item v-for='order in ordersStatusFilter("待确认")' :key="order.id"  :data='order'></briup-order-item>
      </van-tab>
      <van-tab title="已完成">
        <briup-order-item v-for='order in ordersStatusFilter("已完成")' :key="order.id"  :data='order'></briup-order-item>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapActions, mapState ,mapGetters} from 'vuex'
export default {
  data(){
    return {
      active:0
    }
  },
  computed:{
    ...mapState('order',['orders']),
    ...mapGetters('order',['ordersStatusFilter'])
  },
  created(){
    this.findAllOrders();
  },
  methods:{
    ...mapActions('order',['findAllOrders'])
  }
}
</script>
<style scoped>
.van-tabs {
  padding:50px 0 46px;
}
 .van-tabs__content {
  padding-top: 43px;
}
 .van-tabs__wrap {
  position: fixed;
  width: 100%;
}
.order {
  background: #f1f1f1;
}
.van-nav-bar__title {
  color: #fff;
}
</style>