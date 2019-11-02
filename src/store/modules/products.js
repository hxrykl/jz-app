import {get,post} from '../../http/axios'

export default {
    namespaced:true,
    state:{
        products:[]
    },
    getters:{
        getProducts(state){
            return function(n){
                return state.products.slice(0,n);
            }
        },
        productCategoryFilter(state){
            return (categoryId)=>{
                return state.products.filter(item=>item.categoryId === categoryId)
            }
        }
    },
    mutations:{
        refreshProducts(state,products){
            state.products = products;
        }
    },
    actions:{
        //查询categories
        async findAllProducts({commit}){
            let response = await get("/product/findAll")
            // 为每个产品添加一个number，这个表示用户默认购买了0件
            response.data.forEach(item=>{
                item.number = 0;
              })
            commit("refreshProducts",response.data);
        }
    }
}