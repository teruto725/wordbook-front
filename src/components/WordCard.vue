<template>
    <v-hover v-slot="{ hover }">
        <v-card 
            id="wordcard"
            class = "skill-card white--text opacity : 0 ma-8"
            width="400"
            height = "200"
            elevation="3"
            align="center"
        >
        <v-expand-transition>
            <v-card
            v-if="hover || openDescription"
            class=" transition-fast-in-fast-out orange darken-2 v-card--reveal  white--text"
            style="height: 100%;"
            
            >
                <v-card-title align="center">{{getSurface}}</v-card-title>
            </v-card>
        </v-expand-transition>
        <v-card-title align="center">{{getReverse}}</v-card-title>
        </v-card>
    </v-hover> 
</template>
<script>
  export default {
    name: 'WordCard',
    props:{
        surface:{
            type: String
        },
        reverse:{
            type: String
        },
    },
    data(){
        return {
            getSurface: this.surface,
            getReverse: this.reverse,
        }
    },
    watch: {
        position(newValue) {
            this.getPosition = newValue
        }
    },
    computed: {
        openDescription() {
            return this.getPosition+200 > this.cardTop || false
        }
    },
    mounted() {
        this.cardTop = document.getElementById("wordcard").getBoundingClientRect().top + window.pageYOffset
    },
  }
</script>
<style lang="scss" scoped>
.skill-card {
  overflow : hidden;//スライド部分を削除できる
  background-color: transparent;
}
</style>