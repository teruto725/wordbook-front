<template>
<div>
  <v-row style="height: 100px">
  </v-row>
  <v-row justify="center">
    <v-col>
      <v-card
        class="mx-auto"
        max-width="344"
        color = "secondary"
      >
        <v-card-title class="thirdary--text">
          {{word.english}}
        </v-card-title>
        <v-card-actions>
          <v-btn
            text
            @click="reveal = true"
            color = "thirdary"
            class = "card-btn"
          >
            Check Answer
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
            color = "thirdary"
          >
            <v-card-title class="secondary--text ">{{word.japanese}}</v-card-title>
            <v-card-actions>
              <v-btn
                text     
                color = "secondary"
                @click="reveal = false"
                class="card-btn"
              >
                Close Answer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col>
        <v-btn v-on:click = "success" outlined class="check-button primary--text"> Perfect!</v-btn>

        <v-btn v-on:click = "fault" outlined class="check-button primary--text" > Mistake... </v-btn>
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
      },
      reveal: false,
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
        this.reveal = false
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
        this.reveal = false
      });  
    }
  }
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.check-button{
  margin:10px;
}
</style>