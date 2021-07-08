<template>
<v-row justify=center>
    <v-col cols="10">
        <v-row >
            <div class="title-text">
                {{getTitle}}
            </div>
        </v-row>

    </v-col>
</v-row>
</template>

<script>
  export default {
    name: 'BarTitle',
    props:{
        title:{
            type: String
        }
    },
    data(){
        return {
            getTitle : this.title
        }
    }

  }
</script>

<style>

.title-text{
  font-size: xx-large; 
  text-align:center;
  margin: 5% auto 5%;
  border-bottom: solid 3px black;
}

</style>