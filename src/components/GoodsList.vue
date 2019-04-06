<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="产品名称" width="180"> </el-table-column>
    <el-table-column prop="price" label="价格" width="180" :formatter='priceFormat'> </el-table-column>
    <el-table-column label="数量">
      <template slot-scope="scope">
        <el-input-number size="mini" :min="1" :max="10" v-model="scope.row.num"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column align="center">
      <template slot-scope="btnScope">
        <el-button type="success" size="small" icon="el-icon-plus" @click="pushdata(btnScope.row)">加入购物车</el-button>
        </template>
    </el-table-column>
  </el-table>
   
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations} from 'vuex'
export default {
  name: "goodlist",
  data() {
    return {
      tableData: [
        {
            id: "11",
            name: "苹果手机",
            num: "1",
            price: "2999"
        }, {
            id: "22",
            name: "小米手机",
            num: "1",
            price: "99"
        }, {
            id: "33",
            name: "笔记本电脑",
            num: 1,
            price: "999"
        }, {
            id: "44",
            name: "热水壶",
            num: 1,
            price: "29"
        }
      ],
    };
  },
  created(){
    this.getdata();
  },
  // computed: {
  //   ...mapState({
  //     selectData: state => state.selectData,
  //   }),
  // },
  methods: {
    getdata(){
      this.$http.get('/mock').then(res=>{
        console.log(res)
        this.tableData = res.data.data;
      }).catch(res=>{
        console.log(res)
      })
    },
    ...mapMutations([
      'pushdata',
    ]),
    priceFormat(row, column, cellValue, index) {
      var num = row[column.property]
      num = parseFloat(num);
      var SUM = "";
      var sumFol = num.toFixed(2);
      var sumtotalStr = sumFol;
      var sumEndStr = sumtotalStr.slice(sumtotalStr.indexOf("."));
      var sumStr = sumtotalStr.slice(0, sumtotalStr.indexOf("."));
      if (num.toString().length <= 3) return num;
      if (sumStr.toString().length > 3) {
        var count = 0;
        if (sumStr.toString().length % 3 == 0) {
          count = sumStr.toString().length / 3;
        } else {
          count = (sumStr.toString().length - sumStr.toString().length % 3) / 3;
        }
        var text = "";
        for (let i = 0; i < count; i++) {
          if ((count - i - 1) * 3 + sumStr.toString().length % 3 != 0) {
            text =
              "," +
              sumStr.slice(
                (count - i - 1) * 3 + sumStr.toString().length % 3,
                (count - i - 1) * 3 + sumStr.toString().length % 3 + 3
              ) +
              text;
          } else {
            text =
              sumStr.slice(
                (count - i - 1) * 3 + sumStr.toString().length % 3,
                (count - i - 1) * 3 + sumStr.toString().length % 3 + 3
              ) + text;
          }
        }
        SUM = sumStr.slice(0, sumStr.toString().length % 3) + text + sumEndStr;
        return SUM;
      }
      return sumFol;
    },
    
  }
};
</script>
