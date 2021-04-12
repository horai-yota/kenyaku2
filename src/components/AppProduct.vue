<template>
  <div style="display: flex;" class="mt3">
    <img :src="product.mediumImageUrls[0].imageUrl" class="mr-2">
    <div>
      <h5 class="my-0">{{product.itemName}}</h5>
      <div class="mt-3">{{Number(product.itemPrice).toLocaleString()}}円</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product:{
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
 
.mt3{
  width:75%;
}

</style>