<template>
  <div>
    <v-row justify=center>
      <v-col cols="10">
          <v-row >
              <div class="title-text">
                  I'm using these programming languages.
              </div>
          </v-row>

      </v-col>
    </v-row>


    <v-row justify=center>
      <v-dialog
      v-model="dialog"
      width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-hover v-slot="{ hover }"> -->
          <v-card 
          class = "skill-card white--text"
          width="200"
          height = "200"
          :elevation="hover ? 12 : 3" 
          color = "secondary"
          align="center"
          v-bind="attrs"
          v-on="on"
          >
            <div
            class="hoge"
          >
            Python
          </div>
            <v-img
                  height="150" 
                  width="150"
                          :src= "require('@/assets/icons/python.svg')"
                          class="white--text ma-2"
                          >
            </v-img>

            <v-rating
              background-color="indigo lighten-3"
              color="indigo"
              :value="4"
              small
              readonly
            ></v-rating>
            <v-card-text v-html=getText> </v-card-text>
          </v-card>
          <!-- </v-hover> -->
        </template>
        <v-card>
        <v-card-title class="headline primary lighten-2">
          Python
        </v-card-title>
        <v-card-text>
          一番得意な言語。基本的な文法に加え、lambdaや
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
<style scoped>
.skill-card {
  position: relative;
}
.skill-card:hover > .hoge {
  opacity: 1;
  transform: translateY(0px);
}
.hoge {
  position: absolute;
  bottom: -80px;
  left: 0;
  height: 80px;
  width: 100%; 
  background: white;
  overflow-wrap:break-word; 
  word-break: break-all;
  transition: 0.2s ease-out;
  opacity: 0;
  transform: translateY(-80px);
}
</style>