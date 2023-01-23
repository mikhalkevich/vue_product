<template>
  <nav>
    <router-link to="/">Products</router-link> |
    <router-link to="/about">Users</router-link>
  </nav>
  <CContainer>
    <CRow>
      <CCol lg="2" class="bg-success py-2">
        <input class="input" type="text" placeholder="Text input">
      </CCol>
      <CCol md="8" class="bg py-8">
        <router-view/>
      </CCol>
      <CCol sm="2" class="bg-danger py-2">
        widgets
      </CCol>
    </CRow>
  </CContainer>

</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  data () {
    return {
      collapsed: false,
      warningModal: false
    }
  }
}
</script>