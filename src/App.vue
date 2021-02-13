<template>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginForm from './components/LoginForm.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginForm,
    Profile
  }
}
</script>
