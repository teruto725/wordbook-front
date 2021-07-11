<template>
<div>
  <v-row style="height: 100px">
  </v-row>
  <v-row justify="center">
    <v-col>
      <v-expansion-panels accordion class = "wordcard" color = "secondary">
        <v-expansion-panel color = "secondary"
        >
          <v-expansion-panel-header style = "font-size: 30px;">{{word.english}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{word.japanese}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col>
      <v-row>
        <v-btn v-on:click = "success"> Perfect!</v-btn>
      </v-row>
      <v-row>
        <v-btn v-on:click = "fault"> Mistake... </v-btn>
      </v-row>
    </v-col>
  </v-row>
  <v-row>

  </v-row>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      word:{
          id:0,
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
    },
    success(){
      const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks/"+this.$route.params.id+"/words/"+this.word.id+"/success";
      axios.get(uri, {
        headers: {
          "Content-Type": "application/json", 
          "Authorization": this.$store.state.userToken 
        },
        data: {} 
      }).then(response => {
        this.word = response.data
      });  
    },
    fault(){
      const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks/"+this.$route.params.id+"/words/"+this.word.id+"/fault";
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
<style scoped>
.wordcard {
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;
  width: 200px;
  background-color: indigo;
}
</style>