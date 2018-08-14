<template>
    <div class='container'>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <div class="nav-link">Cars app</div>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/cars">Cars</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add">Add car</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view></router-view>
      
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    
  }
}
</script>

<style>

</style>
