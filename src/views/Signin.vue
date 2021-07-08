<template>
    <form v-on:submit.prevent="doLogin">
        <label>User ID</label>
        <input type="text" placeholder="customer id" v-model="user.userId" />
        <label>Password</label>
        <input type="password" placeholder="password" v-model="user.password" />
        <button type="submit">Sign In</button>
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
      const uri = "https://wordbook-server.herokuapp.com/v1/users";
      console.log(this.user.userId)
      console.log(this.user.userId)
      axios.post(
        uri, 
        {
          user:{
            email: this.user.userId,
            password: this.user.password
          }
        }
      
      ).then(response => {
        console.log("success")
        console.log(response.data.access_token)
        this.$store.dispatch("auth", {
          userId: response.data.email,
          userToken: response.data.access_token
        });
        this.$router.push("Top");
      }).catch(error => {
        console.log(error)
      });
    }
  }
}
</script>

7/13（火曜日)