<template>
<div>
  <v-row>
      <v-alert
      dense
      outlined
      type="error"
      text
      v-model="error"
    >
      <strong>Email</strong> or <strong>Password</strong> is invalid.
    </v-alert>
  </v-row>
  <v-row justify="center">
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
        <v-btn outlined type="submit" color = "primary">Sign In</v-btn>
    </v-form>
    </v-row>
    </div>
</template>
<script>
import axios from 'axios'
/* eslint-disable no-console */
// console log を有効化する
export default {
  data() {
    return {
      user: {},
      valid:false,
      error:false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      pathwordRules: [
        v => !!v || 'Password is required',
      ],
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
        if ( response.data.access_token === undefined ){
          this.error=true
        }
        else{
          this.$store.dispatch("auth", {
            userId: response.data.email,
            userToken: response.data.access_token
          });
          this.$_setIsLogined(true)
          this.$router.push("/");
        }
      });
    }
  }
}
</script>

