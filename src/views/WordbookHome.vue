<template>
    <v-container>
        <v-card
            width="300px"
            color= "secondary"
        >
        <v-row justify="center">
                <h1>{{ wordbook.name }}</h1>
        </v-row>
        <v-row>
            <v-card-actions>
            <v-col col="5"></v-col>
            <v-col justify="center">
                <v-btn :to= '"/wordbooks/" + $route.params.id + "/edit"' outlined >Edit</v-btn>
            </v-col>
            <v-col justify="center">
                <v-btn :to= '"/wordbooks/" + $route.params.id + "/study"' outlined>Study</v-btn>
            </v-col>
            
            </v-card-actions>
        </v-row>
        </v-card>
    </v-container>
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
