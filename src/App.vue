<template>
  <div class="ap1">
    <Header />
    <router-view />
    
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components:{
    Header
    
  }
}
</script>

<style>
body {
  margin: 0;
}
.mt-3 {
  margin-top: 1rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}
.p-3 {
  padding: 1rem;
}


</style>