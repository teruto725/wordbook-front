<template>
    <v-form v-on:submit.prevent="doLogin" v-model="valid">
        <v-text-field  
          type="text" 
          required 
          placeholder="Email" 
          :rules="emailRules"
          v-model="user.userId" 
        />
        <v-text-field  
          type="password" 
          required 
          placeholder="Password" 
          v-model="user.password"
          :rules="pathwordRules" 
        />
        <v-btn outlined type="submit" color = "primary">Sign Up</v-btn>
    </v-form>
</template>
<script>
import axios from 'axios'
/* eslint-disable no-console */
// console log を有効化する
export default {
  data() {
    return {
      user: {},
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      pathwordRules: [
        v => !!v || 'Password is required',
        v => v.length > 6 || 'PassWord must be over than 6 characters ',
      ],
    };
  },
  methods: {
    doLogin() {
      const uri = "https://wordbook-server.herokuapp.com/v1/users";
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
