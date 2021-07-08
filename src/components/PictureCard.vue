<template>

  <v-hover v-slot:default="{ hover }"><!-- hover で浮き上がる -->
    <v-card 
      class = "picture-card ma-5" 
      height="300" 
      width="300"
      :elevation="(hover&& href != '') ? 12 : 3" 
      color = "secondary"
      :href = "getHref" 
      >
      <v-img
        :height="hover ? 300 : 300"
        width="300"
        :src="getSrc"
        class="white--text align-end"
      >
        <v-card-title 
          class="font-weight-black white--text card-title"
          > 
          <v-row>
            <div class="card-title-text">
            {{getTitle}} 
            </div>
            <v-spacer/>
            <v-icon 
              class="card-icon"
              medium
              color = "white"
              >
              {{ hover ? "mdi-arrow-down-bold-box-outline" : "mdi-arrow-up-bold-box-outline"}}
            </v-icon>
          </v-row>
        </v-card-title>
        <v-expand-transition>
          <div v-if="hover">
            <v-card-text 
              v-html=getText
              class = "card-text"
                > 
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-img>

    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'PicutureCard',
    props:{
        src:{
            type: String
        },
        text:{
            type: String
        },
        href:{
            type: String
        },
        title:{
            type: String
        }
    },
    data(){
        return {
            getSrc: this.src,
            getText: this.text,
            getHref: this.href,
            getTitle: this.title
        }
    }
  }
</script>
<style>
.card-title{
  background-color : #E8B499;
}
.card-title-text{
  margin-left : 10px;
}
.card-text{
  background-color : #E8B499;
}
.card-icon{
  float :right;
}
</style>