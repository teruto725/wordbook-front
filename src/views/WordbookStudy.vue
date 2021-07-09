<template>
<div>
    <p>{{word.japanese}}</p>
    <p>{{word.english}}</p>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      word:{
          japanese:"",
          english:""
      }
    };
  },
  created: function() {
    this.getMostDiffWord();
  },
  methods: {
    getMostDiffWord() {
      const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks/"+this.$route.params.id+"/most_diff";
      axios.get(uri, {
        headers: {
          "Content-Type": "application/json", 
          "Authorization": this.$store.state.userToken 
        },
        data: {} 
      }).then(response => {
        this.word = response.data
      });
    }
  }
};
</script>