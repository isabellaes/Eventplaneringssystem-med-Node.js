import Express from "express";
import mongoose from "mongoose";

export async function ConnectToDb() {
  await mongoose.connect("mongodb://localhost:27017/Event");
}

export function EventLinkRouter() {
  const router = Express.Router();

  const eventLinkSchema = new mongoose.Schema({
    eventId: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  });

  const eventLinkModel = mongoose.model("EventLink", eventLinkSchema);

  router.get("/", async (req, res) => {
    try {
      await ConnectToDb();
      const data = await eventLinkModel.find({});
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send("No data found");
      res.end();
    }
  });

  router.post("/", async (req, res) => {
    try {
      await ConnectToDb();
      const request = await eventLinkModel.create(req.body);
      request.save();
      res.status(201).send(request);
    } catch (error) {
      res.status(404).send("Failed to create");
      res.end();
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const data = await eventLinkModel.findOne({ _id: req.params.id });
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send("No data found");
      res.end();
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      const data = await eventLinkModel.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
      );
      await data.save();
      res.send(data);
    } catch (error) {
      res.status(404).send("Update failed");
      res.end();
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      await eventLinkModel.deleteOne({ _id: req.params.id });
      res.status(200).send("Deleted");
    } catch (error) {
      res.status(404).send("Failed to delete");
      res.end();
    }
  });
  return router;
}
