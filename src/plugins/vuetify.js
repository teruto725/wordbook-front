import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#204969",
          secondary: "#d9d9f3",
          thirdary:"#008080",
          error: "#2e8b57",
          warning: "#ffc107",
          info: "#ff5722",
          success: "#795548",
          background: "#dadada",
        },
      },
    },
  });