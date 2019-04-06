<template>
  <div>
    <!-- <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" 
      :style="{ backgroundImage:'url('+require('../assets/test1.jpg')+')',backgroundSize:'cover',
      backgroundPosition:'center center',height: '400px'}"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
    <h1>
      购物车
    </h1>
    <el-row type="flex" justify="center">
      <el-col :span='13'>
        <goods-list></goods-list>
      </el-col>
      <el-col :span='9' :offset="1">
        <shop-cart></shop-cart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import GoodsList from "../components/GoodsList";
import ShopCart from "../components/ShopCart";
export default {
  data() {
    return {
      // swiperOption: {
      //   pagination: {
      //     el: '.swiper-pagination'
      //   }
      // },
      // swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    GoodsList,
    ShopCart
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // this.swiper.slideTo(3, 1000, false)
  }
};
</script>
<style lang="less">
h1 {
  text-align: center;
}
</style>

