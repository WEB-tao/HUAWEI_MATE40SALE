<template>
  <div id="app">

    <!-- 占位符 -->
    <router-view/>


  </div>
</template>

<style>
#app {
  text-align: center;
  margin: 0 auto;
  /* width: 1025px; */
  
}

p,a,div,h1,span{
  font-family: Arial,Helvetica,sans-serif,"Lucida Grande",Verdana;
}

/* 全站清除a下划线设置灰色 */
a{
  text-decoration:none;
  color: #363636;
}



body{
  margin: 0;
  bottom: 0;
}
</style>
