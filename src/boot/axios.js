import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL:
    "https://ap-south-1.aws.data.mongodb-api.com/app/data-qjxpf/endpoint/data/v1/action/",
});
api.defaults.headers.common["api-key"] =
  "DmjW6QZRmryyq8ANV9A5P2IbRK1TXPupYxRnzY5in8hKW8j2LSiR9JE1Krl0eQ0X";

api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Request-Headers"] = "*";

export default boot(({ app }) => {
  app.config.globalProperties.$mongoApi = api;
});

export { api };
