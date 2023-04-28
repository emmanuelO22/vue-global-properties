// ./src/main.js

import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import axios from "axios";

const app = createApp(App);

// define global properties
app.config.globalProperties.blogName = "Logrocket";
app.config.globalProperties.reverseString = function (value) {
  this[value] = this[value].split("").reverse().join("");
};
app.config.globalProperties.axios = axios;

app.mount("#app");
