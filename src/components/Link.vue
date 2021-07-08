<template>
<v-row>
          <v-row justify=center >
        <v-sheet class="base-row" height="100" width="300" color="grey lighten-3" elevation="22">
          <router-link to="/">ホーム</router-link>
        </v-sheet>
      </v-row>

      <v-row justify=center >
        <v-sheet class="base-row" height="100" width="300" color="grey lighten-3" elevation="22">
          <router-link to="/home">ページ１へ</router-link>
        </v-sheet>
      </v-row>



      <router-view/>
</v-row>

    
</template>