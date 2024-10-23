import { EventRouter } from "./routes/eventRouter.js";
import Express from "express";

const app = Express();
const port = 3000;

app.use(Express.json());

app.use("/events", EventRouter());

app.listen(port, () => {
  console.log("server startat på port " + port);
});
