<template>
<v-card color="white">
    
    <v-app-bar 
        app 
        color = "primary" 
        dark
        >
        <v-toolbar-title class = "h1">Blawser Wordbook</v-toolbar-title>
        <template v-slot:extension>
        <v-tabs 
            align-with-title
            grow
            centered
            dark
            color = "white"
            >
        <v-tabs-slider color="secondary"></v-tabs-slider>
          <v-tab v-if="$is_logined" :to="{ name: 'top'}" >TOP</v-tab>  
          <v-tab v-if="$is_logined == false" :to="{ name: 'login'}">Signin</v-tab>
          <v-tab v-if="$is_logined == false" :to="{ name: 'signin'}">Sign Up</v-tab>
          <v-tab v-if="$is_logined" :to="{ name: 'wordbooks'}"> Wordbooks </v-tab>
          <v-tab v-if="$is_logined" v-on:click ="logout()"> LogOut</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
</v-card>

</template>

<script>
    export default {
        name: 'Header',
        
        data(){
            return {
                drawer: null,
            }
        }, 
        methods: {
            logout(){
                this.$_setIsLogined(false);
                console.log(this.$_is_logined())
                this.$router.push("/login");
            }
        }
    }
</script>
