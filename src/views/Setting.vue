<template>
  <div class="m1">
    <p>貯金する単位を設定してください
    </p>
    <input type="number" step=500 v-model.number="gain">
    <button type="button" @click="setGain">設定する</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      gain:0
    }
  },
  created(){
    this.gain = this.$store.state.gain;
  },
  methods:{
    setGain(){
      this.$store.commit('setGain', this.gain);
      alert("設定完了")
    }
  }
}
</script>

<style scoped>

.m1{
  padding: 20px;
}

</style>