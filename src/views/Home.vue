<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/vuejs">Vuejs</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
    <button id="authorize-button" @click="login">Authorize</button>
    <button id="signout-button" @click="logout">Sign Out</button>
    <button id="create-draft-mail-button" @click="createDraftMail">Create Draft Mail</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    login () {
      if (this.$isAuthenticated() !== true) {
        this.$login()
      }
    },
    logout () {
      this.$logout()
    },
    createDraftMail(){
      // this.$getGapiClient()
      //   .then(gapi => {
      //   })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
