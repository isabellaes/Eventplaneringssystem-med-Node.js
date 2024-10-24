import Express from "express";
import mongoose from "mongoose";

export async function ConnectToDb() {
  await mongoose.connect("mongodb://localhost:27017/Event");
}

export function EventRouter() {
  const router = Express.Router();

  const eventSchema = new mongoose.Schema({
    title: {
      type: String,
    },
    organizerId: {
      type: String,
    },
    date: {
      type: Date,
    },
    location: {
      type: String,
    },
    publicDescription: {
      type: String,
    },
    privateDescription: {
      type: String,
    },
    public: {
      type: Boolean,
    },
    signUpRequierd: {
      type: Boolean,
    },
    approvedSignUpRequierd: {
      type: Boolean,
    },
    limitedNumberOfParticipents: {
      type: Number,
    },
    price: {
      type: Number,
    },
  });

  const eventModel = mongoose.model("Event", eventSchema);

  router.get("/", async (req, res) => {
    try {
      await ConnectToDb();
      const data = await eventModel.find({ public: true });
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send("No data found");
      res.end();
    }
  });

  router.post("/", async (req, res) => {
    try {
      await ConnectToDb();
      const request = await eventModel.create(req.body);
      request.save();
      res.status(201).send(request);
    } catch (error) {
      res.status(404).send("Failed to create");
      res.end();
    }
  });

  router.get("/:id", async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
      return res.status(400).send("invalid event format")
    }
    try {
      const event = await eventModel.findById(req.params.id);
      if(!event){
        return res.status(404).send("event not found")
      }
      res.status(200).send(event);
    } catch (error) {
      res.status(500).send("server error");
      res.end();
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      const data = await eventModel.findOneAndUpdate(
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
      await eventModel.deleteOne({ _id: req.params.id });
      res.status(200).send("Deleted");
    } catch (error) {
      res.status(404).send("Failed to delete");
      res.end();
    }
  });
  return router;
}
