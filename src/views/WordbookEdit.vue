<template>
<div>
    <form v-on:submit.prevent="addWord">
        <label>English</label>
        <input type="text" placeholder="english" v-model="new_word.english" />
        <label>Japanese</label>
        <input type="text" placeholder="japanese" v-model="new_word.japanese" />
        <button type="submit">Register</button>
    </form>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              English
            </th>
            <th class="text-left">
              Japanese
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="word in words"
            :key="word.id"
          >
            <td>{{ word.english }}</td>
            <td>{{ word.japanese }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</div>
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
    }
  }
}
</script>

