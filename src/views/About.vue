<template>
    <div>
        <el-table :data="cart_list" @selection-change="handleSelectionChange" width="100%">
          <el-table-column type="selection"></el-table-column>
 
          <el-table-column label="商品名称" prop="goods_name"></el-table-column>
          <el-table-column label="购买数量">
                    <template slot-scope="scope"><div class="div_number">
                              <el-input-number :min="1" size="mini" v-model="scope.row.buy_num"></el-input-number></div>
                    </template>
          </el-table-column>
          <el-table-column label="商品单价" prop="goods_price"></el-table-column>
 
        </el-table>
        <el-row>
                <el-col :span="8">
                            <span style="font-size:12px">共 {{cart_list.length}}件商品，已选择 {{total_num}} 件</span>
                </el-col>
                <el-col :span="16">
                            合计： {{total_price}}元
                <el-button type="primary">去结算</el-button>
        </el-col>
        </el-row>
        <a-date-picker :value="moment(mydate, dateFormat)" :defaultValue="moment('2015/01/01', dateFormat)" :format="dateFormat" />
            <br />
            <a-month-picker :defaultValue="moment(mydate, monthFormat)" :format="monthFormat" />
            <br />
            <a-range-picker
            :defaultValue="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
            :format="dateFormat"
            />
    </div>
</template>
<script>
import moment from 'moment';
export default {
		data(){
			return  {
				cart_list : [{
                    goods_name: "手机",
                    buy_num: "1",
                    goods_price: "23423"
                },
                {
                    goods_name: "手机",
                    buy_num: "1",
                    goods_price: "23423"
                },
                {
                    goods_name: "手机",
                    buy_num: "1",
                    goods_price: "23423"
                },
                {
                    goods_name: "手机",
                    buy_num: "1",
                    goods_price: "23423"
                },],
                check_list:[],
                dateFormat: 'YYYY/MM/DD',
                monthFormat: 'YYYY/MM',
                mydate: '2019/03'
			}
		},
		computed:{
			total_num : function () {
				let num = 0
				this.check_list.forEach((item)=>{
					num += item.buy_num
				})
				return num
			},
			total_price : function () {
				let sum_price = 0
				this.check_list.forEach((item)=>{
					sum_price += item.buy_num*item.goods_price
				})
				return sum_price
			}
		},
		methods:{
			handleSelectionChange:function (val) {
                this.check_list = val;
                console.log(111)
            },
            moment,
		}

	}
</script>

