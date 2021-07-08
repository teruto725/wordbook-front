<template>
<v-container fluid>
  <v-row justify=center>
    <v-col cols="10"> 
  <bar-title title = "This is my Experiences."></bar-title>
  <!-- タイムラインコンポーネント -->
  <v-timeline>
      <v-timeline-item
        v-for="year in years"
        :key="year"
      >
        <span slot="opposite">{{year.year}}</span>
        <v-card class="elevation-2">
          <v-card-title class="text-h5 card-title white--text font-weight-black">
            {{year.title}}
          </v-card-title>
          <v-banner>{{year.overview}}</v-banner>
          <v-card-text>
            <v-list-item v-for="content in year.contents" :key="content">
              <v-list-item-icon>
                <v-icon v-text="content.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class = "item-text" v-text="content.text"></v-list-item-title>
              </v-list-item-content>      
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    </v-col>
  </v-row>
</v-container>
</template>


<script>
import BarTitle from '@/components/BarTitle'
//import DialogButton from '@/components/DialogButton'
  export default {
    components: { // キャメルケースでもいいらしい
      "bar-title":BarTitle,
      //"dialog-button":DialogButton,
    },
data: () => ({
      // 経歴の項目データ
      years: [
        {
          year: '2014~2019',
          title: '奈良高専 情報工学科',
          overview: '部活と課題とテスト勉強、バイトの日々でした。',
          contents: [
            {
              url: "",
              icon: "mdi-basketball",
              text: "剣道部 - 副キャプテン",
            },
            {
              url: "",
              icon: "mdi-school",
              text: "卒業研究 - ソフトウェア工学",
            }
          ],
        },
        {
          year: '2019~2021',
          title: '奈良高専 専攻科 情報システムコース',
          overview: 'プログラミング・コンテストにのめり込んだ２年間でした。',
          contents: [
            {
              url: "https://terublog.hatenablog.com/entry/2020/11/10/215131",
              icon: "mdi-crown",
              text: "高専プロコン2020 - プログラミングコンテスト",
            },
            {
              url: "https://terublog.hatenablog.com/entry/2021/02/14/174806",
              icon: "mdi-crown",
              text: "高専DCON2021 - プログラミングコンテスト",
            },
            {
              url: "",
              icon: "mdi-crown",
              text: "BranCo!2021 - ブランドデザインコンテスト",
            },
            {
              url: "",
              icon: "mdi-crown",
              text: "朝日新聞自然言語処理コンペ - 機械学習コンペティション",
            },
            {
              url: "",
              icon: "mdi-crown",
              text: "Peakers Twitterコンペ - 機械学習コンペティション",
            },
            {
              url: "https://terublog.hatenablog.com/entry/2020/10/08/181656",
              icon: "mdi-earth",
              text: "短期留学 - 1ヶ月間シンガポール",
            },
            {
              url: "",
              icon: "mdi-briefcase",
              text: "ダイナミックプライシングテクノロジー - 長期インターン",
            },
            {
              url: "",
              icon: "mdi-school",
              text: "卒業研究",
            },
          ],
        },
        {
          year: '2021~2023',
          title: '奈良先端科学技術大学院大学 情報科学領域',
          overview: '研究と就活を頑張る！',
          contents: [
            {
              url: "",
              icon: "mdi-school",
              text: "ソフトウェアシンポジウム2021 - 奨励賞受賞",
            },
            {
              url: "",
              icon: "mdi-briefcase",
              text: "カラビナテクノロジー - 長期インターン",
            }
          ],
        },
      ],
    }),
  }
</script>

<style>
.card-title{
  background-color : #E8B499;
}
.item-text{
  color : #696969
}
</style>