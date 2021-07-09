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
        <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab :to="{ name: 'top'}" >TOP</v-tab>  
          <v-tab :to="{ name: 'login'}">Login</v-tab>
          <v-tab :to="{ name: 'signin'}">Sign in</v-tab>
          <v-tab :to="{ name: 'wordbooks'}"> Wordbooks </v-tab>
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
                drawer: null

            }
        }
    }
</script>
