<template>
    <div>
        <h1>{{ wordbook.name }}</h1>
        <router-link :to= '"/wordbooks/" + $route.params.id + "/edit"'>Edit</router-link>
        <router-link :to= '"/wordbooks/" + $route.params.id + "/study"'>Study</router-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            wordbook :{}
        };
    },
    created: function() {
        this.getWordbook()
    },
    methods: {
        getWordbook() {
        const uri = "https://wordbook-server.herokuapp.com/v1/wordbooks/"+this.$route.params.id;
        axios.get(uri, {
            headers: { 
            "Content-Type": "application/json", 
            "Authorization": this.$store.state.userToken 
            },
            data: {} 
        }).then(response => {
            this.wordbook = response.data;
        });
        },
    }
};
</script>
