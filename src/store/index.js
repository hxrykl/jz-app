  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  import customer from './modules/customer'
  import category from './modules/category'
  import user from './modules/user'
  import address from './modules/address'
  import products from './modules/products'
  import shopcar from './modules/shopcar'
  import order from './modules/order'
  export default new Vuex.Store({
    modules:{
      customer,
      category,
      user,
      address,
      products,
      shopcar,
      order
    }
  })
