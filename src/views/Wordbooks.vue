<template>
<div>
    <h1>My Wordbooks</h1>
    <v-card 
        v-for="wordbook in wordbooks" :key="wordbook.id"
        >
        <v-card-title>{{wordbook.name}}</v-card-title>
        <v-card-actions>
            <router-link :to= '"/wordbooks/" + wordbook.id'>
                開く
            </router-link>
            
        </v-card-actions>
    </v-card>
    <form v-on:submit.prevent="addWordbook">
        <label>Name</label>
        <input type="text" placeholder="name" v-model="new_worbook.name" />
        <button type="submit">Add New Wordbook</button>
    </form>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: "",
      new_worbook: {},
      wordbooks :[]
    };
  },
  created: function() {
    this.getWordbooks();
  },
  methods: {
    getWordbooks() {
      const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks";
      axios.get(uri, {
        headers: { 
          "Content-Type": "application/json", 
          "Authorization": this.$store.state.userToken 
        },
        data: {} 
      }).then(response => {
        this.wordbooks = response.data;
      });
    },
    addWordbook() {
      const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks";
      let config = {
        headers: {
            "Content-Type": "application/json", 
            "Authorization": this.$store.state.userToken
        }
      }
      let data = {
        name: this.new_worbook.name
      }
      axios.post(uri,data, config
        ).then(response => {
        console.log("success");
        this.wordbooks.push(response.data)
        this.new_worbook.name = ""
      })
      .catch(error => {
        console.log(error)
      });
    }
  }
};
</script>