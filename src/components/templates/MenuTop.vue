<template>
  <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <ul class="navbar-nav">
      <li class="nav-item">
    <router-link class="nav-link" to="/">Index</router-link>
      </li>
      <li class="nav-item">
    <router-link class="nav-link"  to="/about">About</router-link>
      </li>
      <li class="nav-item">
    <router-link class="nav-link"  to="/home">Home</router-link>
      </li>
      <li class="nav-item">
    <router-link class="nav-link"  to="/video">Video</router-link>
      </li>
      <li class="nav-item">
    <router-link class="nav-link"  to="/users">Users</router-link>
      </li>
      <li class="nav-link">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-link">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuTop"
}
</script>

<style scoped>

</style>