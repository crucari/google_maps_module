import pkg from "./package.json";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3b8070" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-cookie-control",
      {
        colors: {
          barTextColor: "#fff",
          barBackground: "#12957b",
          barButtonColor: "#fff",
          barButtonBackground: "#206569",
          barButtonHoverColor: "#fff",
          barButtonHoverBackground: "#2e495e",
          modalButtonBackground: "#206569",
          modalButtonHoverColor: "#fff",
          modalButtonHoverBackground: "#2e495e",
          checkboxActiveBackground: "#2e495e",
          checkboxInactiveBackground: "#ede1e1",
          checkboxActiveCircleBackground: "#00c58e",
          checkboxInactiveCircleBackground: "#f44336",
          checkboxDisabledBackground: "#ddd",
          checkboxDisabledCircleBackground: "#fff"
        }
      }
    ],
    [
      "nuxt-gmaps",
      {
        key: process.env.API_KEY
      }
    ]
  ],

  cookies: {
    necessary: [
      {
        name: "Default cookies",
        description: {
          en: "Used for cookie control."
        },
        cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"]
      }
    ],
    optional: [
      {
        name: "Google Analitycs",
        description: {
          en:
            "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic."
        },
        src: "https://www.googletagmanager.com/gtag/js?id=UA-138616567-2",
        async: true,
        cookies: ["_ga", "_gat_gtag_UA_138616567_2", "_gid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "UA-138616567-2");
        }
      }
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
