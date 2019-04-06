import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectData: [],
  },
  mutations: {
    pushdata(state,obj){
      var flag = false
      state.selectData.some(item => {
        if (item.id == obj.id) {
          item.num += obj.num;
          flag = true;
          return true;
        }
      })
      if (!flag) {
        state.selectData.push(JSON.parse(JSON.stringify(obj)))
      }
    },
    removedata(state,obj){
      console.log(obj);
      state.selectData.some((item, i) => {
        if (item.id == obj.id) {
          state.selectData.splice(i, 1)
          return true;
        }
      })
    },
    changedata(state,obj){
      state.selectData.some((item, i) => {
        if (item.id == obj.id) {
          item.num = obj.num;
          return true;
        }
      })
    }
  },
  actions: {}
});
