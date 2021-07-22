<template>
 <amplify-authenticator>
     <amplify-sign-out></amplify-sign-out> 
     <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Amplify 2"/> 
    <!-- The rest of your app code -->
    
  </amplify-authenticator>



</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default  {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
