<template>
<v-app :style="{background: $vuetify.theme.themes[theme].background}">
  <head-bar/><!-- headbar --> 
  <v-main>
    <v-row style="height: 50px">

    </v-row>
    <v-row justify="center">
      <router-view />
    </v-row>
  </v-main>

  <v-footer color = "primary" clipped-left >
    <v-col
        class="primary py-4 text-center "
        cols="12"
      >
  {{ new Date().getFullYear() }} — <strong> Blawser Wordbook</strong>
    </v-col>
  </v-footer>
</v-app>
</template>



<script>
import HeadBar from '@/components/HeadBar'
export default {// 外部からも参照できるようにする
  name: "App",
  components: { // キャメルケースでもいいらしい
    "head-bar":HeadBar
  },
  data(){// return で初期設定を指定したものを返す
    return{
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};


</script>


<style>

</style>
