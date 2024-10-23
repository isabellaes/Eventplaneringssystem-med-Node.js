import Express from "express";
import mongoose from "mongoose";

export async function ConnectToDb() {
  await mongoose.connect("mongodb://localhost:27017/Event");
}

export function EventRouter() {
  const router = Express.Router();

  const eventSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  });

  const eventModel = mongoose.model("Event", eventSchema);

  router.get("/", async (req, res) => {
    try {
      await ConnectToDb();
      const data = await eventModel.find({});
      res.status(200).send(data);
    } catch (error) {
      console.log("error..");
    }
  });

  router.post("/", async (req, res) => {
    try {
      await ConnectToDb();
      const request = await eventModel.create(req.body);
      request.save();
      res.status(201).send(request);
    } catch (error) {
      res.status(404).send("Failed");
      res.end();
    }
  });

  router.get("/:id", async (req, res) => {
    const data = await eventModel.findOne({ _id: req.params.id });
    res.send(data);
  });

  router.patch("/:id", async (req, res) => {
    const data = await eventModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    await data.save();
    res.send(data);
  });

  router.delete("/:id", async (req, res) => {
    await eventModel.deleteOne({ _id: req.params.id });
    res.send("OK");
  });
  return router;
}

/* 
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    public: {
      type: Boolean,
      required: true,
    },
    signUpRequierd: {
      type: Boolean,
      required: true,
    },
    approvedSignUpRequierd: {
      type: Boolean,
      required: true,
    },
    free: {
      type: Boolean,
      required: true,
    },
    availiblePlaces: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

*/
