import Express from "express";
import mongoose from "mongoose";

export async function ConnectToDb() {
  await mongoose.connect("mongodb://localhost:27017/Event");
}

export function OrganizerRouter() {
  const router = Express.Router();

  const organizerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        required: true,
      },
  });

  const organizerModel = mongoose.model("Organizer", organizerSchema);

  router.get("/", async (req, res) => {
    try {
      await ConnectToDb();
      const data = await organizerModel.find({});
      res.status(200).send(data);
    } catch (error) {
      console.log("error..");
    }
  });

  router.post("/", async (req, res) => {
    try {
      await ConnectToDb();
      const request = await organizerModel.create(req.body);
      request.save();
      res.status(201).send(request);
    } catch (error) {
      res.status(404).send("Failed");
      res.end();
    }
  });

  router.get("/:id", async (req, res) => {
    const data = await organizerModel.findOne({ _id: req.params.id });
    res.send(data);
  });

  router.patch("/:id", async (req, res) => {
    const data = await organizerModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    await data.save();
    res.send(data);
  });

  router.delete("/:id", async (req, res) => {
    await organizerModel.deleteOne({ _id: req.params.id });
    res.send("OK");
  });
  return router;
}
