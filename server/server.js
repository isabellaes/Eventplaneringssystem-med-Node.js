import { EventRouter } from "./routes/eventRouter.js";
import Express from "express";
import { OrganizerRouter } from "./routes/organizerRouter.js";
import { UserRouter } from "./routes/userRouter.js";
import { PaymentRouter } from "./routes/paymentRouter.js";
import { EventLinkRouter } from "./routes/eventLinkRouter.js";

const app = Express();
const port = 3000;

app.use(Express.json());

app.use("/events", EventRouter());
app.use("/organizers", OrganizerRouter());
app.use("/users", UserRouter());
app.use("/payments", PaymentRouter());
app.use("/eventlinks", EventLinkRouter());

app.listen(port, () => {
  console.log("server startat på port " + port);
});
