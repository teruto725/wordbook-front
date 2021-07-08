<template>
    
<v-col 
    justify=center
    align="center"
    >
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-btn 
            color="black"
            height = 200
            width = 200
            class="ma-2"
            outlined
            tile
            text
            v-bind="attrs"
            v-on="on"
        >
            <div class = "btn-text">
            {{getTitle}}
            </div>  
        </v-btn>
        </template>
        <template v-slot:default="dialog">
        <v-card>
            <v-toolbar
            color="primary"
            class = "text-h6"
            dark
            >{{getTitle}}</v-toolbar>
            <v-card-text>
            <div class="text-body1 pa-12 ">{{getText}}</div>
            </v-card-text>
            <v-card-actions class="justify-end">
            <v-btn
                text
                @click="dialog.value = false"
            >Close</v-btn>
            </v-card-actions>
        </v-card>
        </template>
    </v-dialog>
</v-col>

</template>
<script>
  export default {
    name: 'DialogButton',
    props:{
        title:{
            type: String
        },
        text:{
            type: String
        }
    },
    data(){
        return {
            getTitle: this.title,
            getText: this.text
        }
    }
  }
</script>