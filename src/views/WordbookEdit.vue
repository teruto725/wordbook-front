<template>
<v-container>
  <v-row>
    <v-col>
      <v-simple-table
        color="secondary"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                English
              </th>
              <th class="text-left">
                Japanese
              </th>
              <th class="text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="word in words"
              :key="word.id"
            >
              <td>{{ word.english }}</td>
              <td>{{ word.japanese }}</td>
              <td>     
                <v-btn
                  icon
                  color="gray"
                  v-on:click = "deleteWord(word.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
    <v-col cols = "2">
    </v-col>
    <v-col justify="center">
      <form v-on:submit.prevent="addWord">

      <v-row justify="center">
        <v-text-field type="text" placeholder="English" v-model="new_word.english" />
      </v-row>
      <v-row>
        <v-text-field type="text" placeholder="Japanese" v-model="new_word.japanese" />
      </v-row>
      <v-row>
        <v-btn type="submit" outlined>AddWord</v-btn>
      </v-row>
    </form>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import axios from 'axios'
/* eslint-disable no-console */
// console log を有効化する
export default {
  data() {
    return {
      words: [],
      new_word: {}
    };
  },
  created: function() {
    this.getWords()
  },
  methods: {
    addWord() {
      const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks/"+this.$route.params.id+"/words";
      console.log(this.new_word.english)
      console.log(this.$store.state.userToken)
      let config = {
        headers: {
            "Content-Type": "application/json", 
            "Authorization": this.$store.state.userToken
        }
      }
      let data = {
        english: this.new_word.english,
        japanese: this.new_word.japanese
      }
      axios.post(uri,data, config
        ).then(response => {
        console.log("success");
        console.log(response)
        this.words.push(response.data)
        this.new_word.english = ""
        this.new_word.japanese = ""
      })
      .catch(error => {
        console.log(error)
      });
    },
    getWords() {
      const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks/"+this.$route.params.id+"/words";
      axios.get(uri, {
        headers: { 
          "Content-Type": "application/json", 
          "Authorization": this.$store.state.userToken 
        },
        data: {} 
      }).then(response => {
        this.words = response.data;
      });
    },
    deleteWord(word_id){
      console.log(word_id)
      const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks/"+this.$route.params.id+"/words/"+word_id;
      axios.delete(uri, {
        headers: { 
          "Content-Type": "application/json", 
          "Authorization": this.$store.state.userToken 
        },
        data: {} 
      }).then(response => {
        console.log(response.data)
        this.words = this.words.filter(function( word){
          return word.id !== response.data.id
        }); 
        console.log(this.words)
      });
    }
  }
}
</script>

