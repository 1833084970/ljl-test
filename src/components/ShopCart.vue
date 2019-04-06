<template>
   <div>
      <el-table :data="selectData" border style="width: 100%">
        <el-table-column prop="name" label="产品名称" width="180"> </el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            <el-input-number size="mini" :min="1" :max="10" v-model="scope.row.num" @change="changedata(scope.row)"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column align="center">
          <template slot-scope="btnScope">
            <el-button type="danger" size="small" icon="el-icon-close" @click="removedata(btnScope.row)">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
      <p>{{goodsnum}} 件商品，总计 {{pricesum}} 元</p>
   </div>

</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "shopcart",
  data() {
    return {};
  },
  computed: {
    ...mapState(["selectData"]),
    pricesum(){
      var pricesum =0;
      this.selectData.forEach(item => {
        pricesum+=item.num*item.price;
      });
      return pricesum;
    },
    goodsnum(){
      var goodsnum = 0;
      this.selectData.forEach(item => {
        goodsnum+=item.num;
      });
      return goodsnum;
    }
  },
  methods: {
    ...mapMutations([
      "removedata",
      "changedata"
    ]),
  }
};
</script>
<style lang="less">
</style>
