import Koa from "koa";
import parser from "koa-bodyparser";
import cors from "@koa/cors";
import router from "./user-routes";
const App = new Koa();
const port = 4001;

App.use(parser())
  .use(cors())
  .use(router.routes())
  .listen(port, () => {
    console.log(`🚀 Server listening http://localhost:${port}/ 🚀`);
  });

