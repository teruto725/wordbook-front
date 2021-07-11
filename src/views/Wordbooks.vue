<template>
<v-container>
  <v-row justify="center">
    <h1>My Wordbooks</h1>
  </v-row>
  <v-row justify="center">
    <v-col cols="6" justify="center">
      <v-card 
          v-for="wordbook in wordbooks" :key="wordbook.id"
          color="secondary"
          class = "book-card"
          >
          <v-row>
            <v-col cols = "1"></v-col>
              <v-col justify="center" class = "primary--text book-text">
                <v-card-title>{{wordbook.name}}</v-card-title>  
              </v-col>
            <v-card-actions>
                  <v-btn 
                    :to= '"/wordbooks/" + wordbook.id'
                    class="2"
                    fab
                    color="primary"
                    icon
                  > 
                    <v-icon small>mdi-pencil</v-icon> 
                  </v-btn>              
                  <v-btn
                    icon
                    fab
                    color="primary"
                    v-on:click = "deleteWordbook(wordbook.id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
            </v-card-actions>
            <v-col cols = "1"></v-col>
          </v-row>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-form v-on:submit.prevent="addWordbook" class = "form-add">
          <v-text-field type="text" placeholder="bookname" v-model="new_worbook.name" />
          <v-btn type="submit" outlined color="primary" >Add New Wordbook</v-btn>
      </v-form>
    </v-col>
  </v-row>
</v-container>
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
    },
    deleteWordbook(wordbook_id){
      console.log(wordbook_id)
      const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks/"+wordbook_id;
      axios.delete(uri, {
        headers: { 
          "Content-Type": "application/json", 
          "Authorization": this.$store.state.userToken 
        },
        data: {} 
      }).then(response => {
        console.log(response.data)
        this.wordbooks = this.wordbooks.filter(function( wordbook){
          return wordbook.id !== response.data.id
        }); 
      });
    }
  }
};
</script>
<style scoped>
.book-card{
  margin: 20px;
  height: 90px;
  width: 300px;
}
.form-add{
  margin-top:30px;
}
</style>