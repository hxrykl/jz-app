import {get} from '../../http/axios'

export default {
    namespaced:true,
    state:{
        addresses:[],
        areaList:{}
    },
    getters:{

    },
    mutations:{
        refreshAddresses(state,addresses){
            state.addresses = addresses;
        }
    },
    actions:{
        // async findAllAddresses(context){
        //     let response = await get('address/findAll')
        //     context.commit("refreshAddresses",response.data)
        // }
        findAllAddresses({commit},){
            get("/address/findAll")
            .then((response)=>{
                // 由于后台返回的数据与插件要求的数据格式不同，所以这里要转换一下
                let addresses = [];
                response.data.forEach((item)=>{
                    let address = {
                        id: item.id,
                        tel: item.telephone,
                        address: item.province+""+item.city+""+item.area+""+item.address
                    }
                    addresses.push(address);
                })
                commit("refreshAddresses",addresses);
            })
        }
    }
}