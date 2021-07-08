<template>
    <v-hover v-slot="{ hover }">
        <v-card 
            :id="`card-${getTitle}`"
            class = "skill-card white--text opacity : 0 ma-8"
            width="200"
            height = "200"
            elevation="0"
            align="center"
        >
        <v-expand-transition>
            <v-card
            v-if="hover || openDescription"
            class=" transition-fast-in-fast-out orange darken-2 v-card--reveal  white--text"
            style="height: 100%;"
            
            >
                <v-card-title align="center">{{getTitle}}</v-card-title>
                <v-card-text class = "white--text" v-html=getText></v-card-text>
            </v-card>
        </v-expand-transition>
        <v-img
                height = "150" 
                width= "150"
                        :src="getSrc"
                        class="white--text ma-2"
                        contain
                        >
        </v-img>

        <v-rating
            background-color="glay lighten-3"
            color="orange"
            :value="getStars"
            
            readonly
        ></v-rating>
        </v-card>
    </v-hover> 
</template>
<script>
  export default {
    name: 'SkillCard',
    props:{
        src:{
            type: String
        },
        title:{
            type: String
        },
        stars:{
            type: Number
        },
        text:{
            type: String
        },
        position:{
            type: Number
        }
    },
    data(){
        return {
            getSrc: this.src,
            getTitle: this.title,
            getStars: this.stars,
            getText: this.text,
            getPosition: this.position,
            cardTop: 0,
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
        this.cardTop = document.getElementById(`card-${this.getTitle}`).getBoundingClientRect().top + window.pageYOffset
    },
  }
</script>
<style lang="scss" scoped>
.skill-card {
  overflow : hidden;//スライド部分を削除できる
  background-color: transparent;
}
</style>