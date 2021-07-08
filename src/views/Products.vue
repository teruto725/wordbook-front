<template>
  <div class="about">
    <v-row>
    <v-col>
      <v-spacer></v-spacer>
    </v-col>
    </v-row>
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
    <v-row>
      <v-col>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import PictureCard from '@/components/PictureCard'
export default {// 外部からも参照できるようにする
  name: "App",
  components: { // キャメルケースでもいいらしい
    "picture-card":PictureCard,
  },
  data(){// return で初期設定を指定したものを返す
    return{
      card_products : [
        {
          title: 'かきかた先生',
          src: 'kakikata.png',
          href: "https://github.com/teruto725/ai_review_char",
          text: "小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"
        },
        {
          title: '金魚認識システム',
          src: 'kingyo.png',
          href: "https://github.com/teruto725/kingyo_learn",
          text: "金魚の個体識別アプリ<br>CNNとTrackingを組み合わせて作った<br>残念なことに実際の環境では試せてない..."
        },
        {
          title: 'TangoBot',
          src: 'tango_bot.png',
          href: "https://qiita.com/teruto725/items/4fb91aee55fbb6a37189",
          text: 'MS Teams上で動く単語帳bot<br>Azureで画像認識とかもしてくれる<br>ふざけた機能もいっぱいつけた'
        },
        {
          title: 'ブラウザ英単語帳',
          src: 'wordbook.png',
          href: "https://terublog.hatenablog.com/entry/2019/04/16/160412",
          text: '高専5年生で作った処女作<br>PHPベタ書きで頑張った！<br>ユーザ90人突破してるのが自慢'
        },
        {
          title: 'SSTimer',
          src: 'lol.png',
          href: "https://terublog.hatenablog.com/entry/2019/02/08/154553",
          text: "スキルの時間を管理するタイマーアプリ<br>一瞬でめんどくさくなって使わなくなったのは内緒笑"
        },
        {
          title: 'Hopers',
          src: 'hoper.png',
          href: "https://github.com/teruto725/hopers",
          text: '友達に頼まれて無料で作ったLP<br>結局チーム解散しちゃったらしくて悲しい...'
        },
        {
          title: 'BoardCoder',
          src: 'geschenkt-top.jpeg',
          href: "https://github.com/teruto725/python-online-game",
          text: 'オンラインボードゲームシミュレータ<br>AIをプログラミングして対決する!<br>GUI完成したらみんなで遊びたい！'
        },
        {
          title: 'GameLog',
          src: 'gamelog.png',
          href: "https://terublog.hatenablog.com/entry/2019/02/08/154553",
          text: "ゲームのレビューサイト<br>起業目指してる友達に相談されて作ったのに空中分解しちゃった..."
        },
        {
          title: 'Azure-for-TOEIC',
          src: 'azure_toeic.png',
          href: "https://qiita.com/teruto725/items/2ebbac15637a11d9271d",
          text: 'TOEICの写真を撮ったら中の英単語抜き出してくれたりその他便利な機能いっぱい!<br>Azureの精度がもうちょっと良ければ...'
        },
      ]
    }
  },
};

</script>

<style lang="scss" scoped>
.content-area {
  margin: 10px;
  padding: 10px;
}
</style>