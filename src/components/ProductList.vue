<template>
  <div>
    <form @submit.prevent="submit" @reset.prevent="reset">
      <select v-model="form.age">
        <option :value="10">10代</option>
        <option :value="20">20代</option>
        <option :value="30">30代</option>
        <option :value="40">40代</option>
        <option :value="50">50代</option>
      </select>
      <select v-model="form.sex">
        <option :value="0">男</option>
        <option :value="1">女</option>
      </select>
      <input type="submit" value="表示">
      <input type="reset" value="クリア">
    </form>
    <div>
      <p v-if="productsWithinBudget && productsWithinBudget.length === 0">購入できる商品がありません</p>
      <template>
        <AppProduct v-for="p in productsWithinBudget" :key="p.itemCode" :product="p" />
      </template>
    </div>
  </div>
</template>

<script>
import { fetchRanking } from '../api/index';
import AppProduct from './AppProduct';
export default {
  components:{AppProduct},
  props:{
    budget:{
      type:Number,
      required: true
    }
  },
  data(){
    return{
      form:{
        age: 10,
        sex:0
      },
      products: null
    };
  },
  computed:{
    productsWithinBudget(){
      return this.products
        ?.filter(p => p.itemPrice <= this.budget)
        .sort((a,b) => b.itemPrice - a.itemPrice)
    }
  },
  methods:{
    async submit(){
      this.products = null;
      const{ age,sex } = this.form;
      const res =await fetchRanking(age, sex);
      this.products = res.data.Items.map(i => i.Item);
    },
    reset(){
      this.form.age = 10;
      this.form.sex = 0;
      this.products = null;
    }
  }
}
</script>