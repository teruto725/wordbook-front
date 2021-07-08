<template>
<v-app :style="{background: $vuetify.theme.themes[theme].background}">
  <head-bar/><!-- headbar --> 
  <v-main>
    <router-view />
  </v-main>

  <v-footer color = "primary" clipped-left >
    <v-col
        class="primary py-4 text-center "
        cols="12"
      >
  {{ new Date().getFullYear() }} — <strong>Teru's Portfolio</strong>
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
