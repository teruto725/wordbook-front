<template>
<div>
  <h3>Welcome {{ this.$store.state.userId }}</h3>
  <p>{{data}}</p>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: ""
    };
  },
  created: function() {
    this.fetchHello();
  },
  methods: {
    fetchHello() {
      const uri = "https://wordbook-server.herokuapp.com/v1/users/words";
      console.log(this.$store.state.userId)
      console.log(this.$store.state.userToken)
      axios.get(uri, {
        headers: { 
          "Content-Type": "application/json", 
          "Authorization": this.$store.state.userToken 
        },
        data: {} 
      }).then(response => {
        this.data = response.data;
      });
    }
  }
};
</script>