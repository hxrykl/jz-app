import {get,post_obj_array} from '../../http/axios'
export default {
  namespaced:true,
  state: {
    orders:[]
  },
  getters:{
    // 根据订单状态进行过滤
    ordersStatusFilter(state){
      return (status)=>{
        return state.orders.filter(order=>order.status === status)
      }
    }
  },
  mutations: {
    refreshOrders(state,orders){
      state.orders = orders;
    }
  },
  actions: {
    // 确认保存订单
    async saveOrder({commit,rootState}){
      // 顾客id就是当前登录者的信息
      let customerId = rootState.user.info.id;
      // 写死，当前顾客所有地址中的第一个地址
      let addressId = rootState.address.addresses[0].id
      // 购物车中的订单
      let orderLines = rootState.shopcar.orderLines;
      //1. 保存订单
      let data = {customerId,addressId,orderLines}
      let response = await post_obj_array('/order/save',data);
      //2. 清理购物车
      commit('shopcar/clearShopcar',null,{root:true})
      return response;
    },
    // 查询当前用户的所有订单
    async findAllOrders({commit,rootState}){
      let customerId = rootState.user.info.id
      let response = await get('/order/query',{customerId});
      commit('refreshOrders',response.data)
    }
  }
}