<template>
    <form v-on:submit.prevent="addWord">
        <label>English</label>
        <input type="text" placeholder="english" v-model="word.english" />
        <label>Japanese</label>
        <input type="text" placeholder="japanese" v-model="word.japanese" />
        <button type="submit">Register</button>
    </form>
</template>
<script>
import axios from 'axios'
/* eslint-disable no-console */
// console log を有効化する
export default {
  data() {
    return {
      word: {}
    };
  },
  methods: {
    addWord() {
      const uri = "https://wordbook-server.herokuapp.com/v1/users/words";
      console.log(this.word.english)
      console.log(this.$store.state.userToken)
      let config = {
        headers: {
            "Content-Type": "application/json", 
            "Authorization": this.$store.state.userToken
        }
      }
      let data = {
        english: this.word.english,
        japanese: this.word.japanese
      }
      axios.post(uri,data, config
        ).then(response => {
        console.log("success");
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
    }
  }
}
</script>

