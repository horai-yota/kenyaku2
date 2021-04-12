<template>
  <div id="kenyaku">
    <div class="hd1">
      <h1><img src="../assets/logo copy.png" alt="ロゴ"></h1>
    </div>
    <div class="menu">
      <nav>
        <ul>
          <li><router-link to="/" class="hd2">ホーム</router-link></li>
          <li><router-link to="/setting" class="hd2">設定</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

#kenyaku{
  background-color:cadetblue;
  display:flex;
  justify-content: space-between;
}

.menu nav ul{
  list-style:none;
  font-size:30px;

}

.menu{
  display:flex;
}

.hd2{
  text-decoration:none;
  
}

</style>