<template>
<v-container fluid> 
      <bar-title title = "Welcome to my portfolio."></bar-title>

      <bar-title title = "My name is Akihito Ihara."></bar-title>
      <v-row class = "content-area" justify="center">
        <picture-card 
          href =""
          :src ="require('@/assets/my_picture.jpg')"
          title = "プロフィール画像"
          text ="いい感じの写真これしか無いから<br>プロフィール写真いつもこれ..."
          >
        </picture-card>
          <v-card class="ma-5" height="300" width = "300">
            <v-card-title>Basic Profile</v-card-title>
            <v-list>
              <v-list-item>
                <v-list-item-icon> <v-icon> mdi-human</v-icon> </v-list-item-icon>
                <v-list-item-content><v-list-item-title> 22 years old</v-list-item-title></v-list-item-content>
              </v-list-item>
              <v-list-item href = "http://www.naist.jp/">
                <v-list-item-icon> <v-icon> mdi-school</v-icon> </v-list-item-icon>
                <v-list-item-content><v-list-item-title> 奈良先端大  M1</v-list-item-title></v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon> <v-icon> mdi-map-marker-radius-outline</v-icon> </v-list-item-icon>
                <v-list-item-content><v-list-item-title> Nara </v-list-item-title></v-list-item-content>
              </v-list-item>
              <v-list-item href = "https://twitter.com/teruto_725">
                <v-list-item-icon> <v-icon color = "twitter"> mdi-twitter</v-icon> </v-list-item-icon>
                <v-list-item-content> <v-list-item-title> @teruto_725 </v-list-item-title> </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
      </v-row>


      <bar-title title = "I love them so much."></bar-title>
      <v-row class = "content-area" justify="center">
        <picture-card v-for="(card) in card_loves"
          :key="card.title"
          :src ="require(`@/assets/homes/${card.src}`)"
          :title ="card.title"
          :href ="card.href"
          :text="card.text"
          >
        </picture-card>
      </v-row>

      <bar-title title = "I'm usually doing them in my freetime."></bar-title>
      <v-row class = "content-area" justify="center">
        <picture-card v-for="(card) in card_hobbys"
          :key="card.title"
          :src ="require(`@/assets/homes/${card.src}`)"
          :title ="card.title"
          :href ="card.href"
          :text="card.text"
          >
        </picture-card>
      </v-row>

      <bar-title title = "I love making products too."></bar-title>
      <v-row class = "content-area" justify="center">
        <picture-card v-for="(card) in card_products"
          :key="card.title"
          :src ="require(`@/assets/products/${card.src}`)"
          :title ="card.title"
          :href ="card.href"
          :text="card.text"
          >
        </picture-card>
      </v-row>

      <bar-title title = "I love making products too."></bar-title>
      <v-row class = "content-area" justify="center">
        <picture-card v-for="(card) in card_products"
          :key="card.title"
          :src ="require(`@/assets/products/${card.src}`)"
          :title ="card.title"
          :href ="card.href"
          :text="card.text"
          >
        </picture-card>
      </v-row>

      <bar-title title = "If you're interested me, check out the other pages!"></bar-title>
      <v-row class = "content-area" justify="center">
      </v-row>
      <v-row height="200">
      </v-row>
    </v-container> 
</template>


<script>
//import TopPicture from '@/components/TopPicture'
import BarTitle from '@/components/BarTitle'
import PictureCard from '@/components/PictureCard'
export default {// 外部からも参照できるようにする
  name: "App",
  components: { // キャメルケースでもいいらしい
    //"top-picture":TopPicture,
    "bar-title":BarTitle,
    "picture-card":PictureCard,
  },
  data(){// return で初期設定を指定したものを返す
    return{
      card_loves: [
        {
          title: '映秀',
          src: 'eisyu.jpeg',
          href: "https://www.youtube.com/channel/UCtHqD5chQk_SrMa9hnyWS8g",
          text: 'この子に憧れてギターを始めた<br>東京散歩って曲が一番好き<br>最近1stアルバム出た'
        },
        {
          title: 'でびでびでびる',
          src: 'debi.jpg',
          href: "https://www.youtube.com/channel/UCjlmCrq4TP1I4xguOtJ-31w",
          text: "日々の癒やし、行動の活力<br>ときおり見せる優しい一面が好き"
        },
        {
          title: '理芽',
          src: 'rime.jpeg',
          href: "https://www.youtube.com/channel/UCfBkUgaJ6eqYA9_TX2cmq9A",
          text: 'V-singer<br>儚い歌声が素敵<br> 楽曲がダークな感じでさらに素敵'
        },
      ],
      card_hobbys : [
        {
          title: 'PCゲーム',
          src: 'steam.jpeg',
          href: "",
          text: '毎晩友達とゲームしてる<br>戦略とか考えるゲームが好き<br>最近のイチオシはSatisfactory'
        },
        {
          title: 'ギター',
          src: 'guitor.jpg',
          href: "",
          text: "初めてもうすぐ２年<br>コードしか弾かないので全然上達しない<br>誰か教えて..."
        },
        {
          title: 'ボードゲーム',
          src: 'boardgame.jpg',
          href: "",
          text: '研究室の教授の影響でハマりだした<br>研究室に残って20時くらいまで遊んでた<br> お気に入りはFate Grail War'
        },
      ],
      card_products : [
        {
          title: 'かきかた先生',
          src: 'kakikata.png',
          href: "https://github.com/teruto725/ai_review_char",
          text: "小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"
        },
        {
          title: 'ブラウザ英単語帳',
          src: 'wordbook.png',
          href: "https://terublog.hatenablog.com/entry/2019/04/16/160412",
          text: '高専5年生で作った処女作<br>PHPベタ書きで頑張った！<br>ユーザ100人突破してるのが自慢'
        },
      ],
      card_skills : [
        {
          
        },

      ]
    }
  },

};


</script>


<style lang="scss" scoped>
.content-area {
  margin : 10px;
  margin-bottom: 100px;
}


</style>