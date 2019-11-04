<template>
    <div class="home">
        <van-row>
            <img style="width:100%;height:210px;" 
            src="../../assets/images/home_02.png" alt="">
        </van-row>
        <!-- 栏目 -->
        <ul class="categories">
            <li v-for="(c,index)  in getCategories(6)" :key="c .id" @click="toProductListHandler(c.id,index)">
                <div class="imgs"><img :src="c.icon" alt=""></div>
                <div>{{c.name}}</div>
            </li>
        </ul>
        <!-- 推荐 -->
        <ul class="products">
            <li v-for="p  in getProducts(6)" :key="p .id">
                <div class="imgs"><img :src="p.photo" alt="" height="70px" width="70px"></div>
                <div>{{p.name}}</div>
            </li>
        </ul>
    </div>
</template> 
<script>
import { mapState,mapGetters,mapActions} from 'vuex'

export default {
    created(){
        this.findAllCategories();
        this.findAllProducts();
    },
    computed:{
        ...mapState("category",["categories"]),
        ...mapState("products",["products"]),
        ...mapGetters("category",["getCategories"]),
        ...mapGetters("products",["getProducts"])
    },
    methods:{
        ...mapActions("category",["findAllCategories"]),
        ...mapActions("products",["findAllProducts"]),
        toProductListHandler(id,activeKey){
          this.$router.push({path:'/manager/product_list',query:{id,activeKey}})
        }
        
    },
    
}
</script>
<style scoped>
.categories {
  text-align: center;
  border-bottom: 2px solid #04bfa6;
}
.categories::after {
  content: "";
  clear:both;
  display: block
}
.categories > li {
  width: 26.333%;
  float: left;
  height: 90px;
  border: 1px solid#04bfa6;
  border-radius: 8px;
  margin: 5px 0 10px 17px;
}
.categories img {
	width: 50%;
	line-height: 3em;
}
.categories .imgs,
.products .imgs{
	height: 75px;
	display:flex;
	align-items:center; /*交叉轴*/
	justify-content: center; /*主轴*/
}
.products .imgs {
  height: 65px;
}
.products .imgs img {
  width: 65%;
  height: 65%;
}
.products {
  text-align: center;
}
.products::after {
  content: "";
  clear:both;
  display: block
}
.products > li {
  width: 23.333%;
  float: left;
  height: 80px;
  border: 1px solid#04bfa6;
  border-radius: 3px;
  margin: 8px 0 0px 27px;
}
</style>
