import { EventRouter } from "./routes/eventRouter.js";
import Express from "express";
import { OrganizerRouter } from "./routes/organizerRouter.js";
import { UserRouter } from "./routes/userRouter.js";

const app = Express();
const port = 3000;

app.use(Express.json());

app.use("/events", EventRouter());
app.use("/organizers", OrganizerRouter());
app.use("/users", UserRouter());

app.listen(port, () => {
  console.log("server startat på port " + port);
});
