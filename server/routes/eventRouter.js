import Express from "express";
import mongoose from "mongoose";

export async function ConnectToDb() {
  await mongoose.connect("mongodb://localhost:27017/Event");
}

export function EventRouter() {
  const router = Express.Router();

  const eventSchema = new mongoose.Schema({
    name: String,
  });

  const eventModel = mongoose.model("Event", eventSchema);

  router.get("/", async (req, res) => {
    try {
      await ConnectToDb();
      const data = await eventModel.find({});
      res.send(data);
    } catch (error) {
      console.log("error..");
    }
  });

  router.post("/", async (req, res) => {
    try {
      await ConnectToDb();
      await eventModel.create(req.body);
      res.send(req.body);
    } catch (error) {}
  });

  router.get("/:id", async (req, res) => {
    const data = await eventModel.findOne({ _id: req.params.id });
    res.send(data);
  });

  router.patch("/:id", (req, res) => {});

  router.delete("/:id", (req, res) => {});
  return router;
}
