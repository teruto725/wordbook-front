import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#BEA28C",
          secondary: "#E8B499",
          thirdary:"#95CBCC",
          error: "#ffeb3b",
          warning: "#ffc107",
          info: "#ff5722",
          success: "#795548",
          background: "#E7D8A9",
          github: '#211F1F',
          facebook: '#3B5998',
          twitter: '#1DA1F2',
          qiita: '#4cb10d',
          
        },
      },
    },
  });