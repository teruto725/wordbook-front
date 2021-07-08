<template>
    <form v-on:submit.prevent="doLogin">
        <label>User ID</label>
        <input type="text" placeholder="customer id" v-model="user.userId" />
        <label>Password</label>
        <input type="password" placeholder="password" v-model="user.password" />
        <button type="submit">Login</button>
    </form>
</template>
<script>
import axios from 'axios'
/* eslint-disable no-console */
// console log を有効化する
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    doLogin() {
      const uri = "https://wordbook-server.herokuapp.com/v1/login";
      console.log(this.user.userId)
      axios.post(
        uri, 
        {
          email: this.user.userId,
          password: this.user.password
        }
      
      ).then(response => {
        console.log("success")
        console.log(response.data.access_token)
        this.$store.dispatch("auth", {
          userId: response.data.email,
          userToken: response.data.access_token
        });
        this.$router.push("/");
      }).catch(error => {
        console.log(error)
      });
    }
  }
}
</script>

