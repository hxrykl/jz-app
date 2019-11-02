<template>
    <div class="productlist">
        <!-- 产品列表 -->
        <div class="top">
            <van-row class="tag">
            <van-col span="1"  offset="0" @click="backHandler"></van-col>
            <van-col span="2"  offset="0" @click="backHandler">
                <van-icon  name="arrow-left" style="line-height:20px" />
            </van-col>
            <van-col span="5"  offset="7"  style="color:black"><strong>产品列表</strong></van-col>
            </van-row>
        </div>
        <van-row>
            <!-- 左侧栏目 -->
            <van-col :span="4">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item  @click="categoryId = c.id"  v-for="c in categories" :key="c.id"  :title="c.name"/>
                </van-sidebar>
            </van-col>
            
            <!-- 右侧产品 -->
            <van-col :span="20">
                <div class="right-content">
                    <briup-product-item v-for='p in productCategoryFilter(categoryId)' :key="p.id" :data='p'></briup-product-item>
                </div>
            </van-col>
        </van-row>
        <!-- 购物车 -->
        <van-submit-bar
        :price=total*100
        button-text="立即下单"
        @submit="toConfirmOrderHandler"
        />
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {
            activeKey:0,
            categoryId:''
        }
    },
    computed:{
        ...mapState('category',['categories']),
        ...mapState('products',['products']),
        ...mapGetters('products',['productCategoryFilter']),
        ...mapState('shopcar',['orderLines']),
        ...mapGetters('shopcar',['total'])
    },
    methods:{
        ...mapActions('category',['findAllCategories']),
        ...mapActions('products',['findAllProducts']),
        backHandler(){
        this.$router.push({path:'/manager/home'});
        },
        toConfirmOrderHandler(){
            this.$router.push({path:'/manager/order_confirm'})
        }
    },
    created(){
        // 查询所有栏目信息
        this.findAllCategories();
        // 查询所有产品信息
        this.findAllProducts();
        this.categoryId = this.$route.query.id;
        this.activeKey = this.$route.query.activeKey;
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