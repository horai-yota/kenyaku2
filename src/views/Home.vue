<template>
  <div class="mt1">
    <div class="ty">
      <ProductList :budget="$store.state.deposit" />
    </div>
    <div class="mt2">
      <form name="st">
        <p>金額</p>
        <p>¥{{$store.state.deposit.toLocaleString()}}</p>
        <button type="button" @click="$store.commit('save')">今日も頑張った！</button>
        <button type="button" @click="$store.commit('rst')">クリア</button>
      </form>
    </div>
  </div>
</template>

<script>
import ProductList from '../components/ProductList'
export default {
  components:{
    ProductList
  }
};
</script>


<style scoped>



.mt1{
  position:relative;
  
}



.mt2{
  position: absolute;
  right: 0px;
  top:0px;
  padding:10px;
}

.ty{
  padding:10px;
}

.home {
  display: flex;
  align-items: flex-start;
  border-top: 80px solid coral;
}
.contents {
  flex-grow: 1;
  max-width: 80%;
}
.right {
  background-color: coral;
  font-size: 2rem;
  min-width: 180px;
  padding: 0.5rem 1rem;
}

</style>