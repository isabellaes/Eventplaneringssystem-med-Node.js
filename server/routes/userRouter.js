import Express from "express";
import mongoose from "mongoose";

export async function ConnectToDb() {
  await mongoose.connect("mongodb://localhost:27017/Event");
}


export function UserRouter() {
const router = Express.Router();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: Number,
        required: true,
        unique: true,
    },
});

const userModel = mongoose.model("User", userSchema);

router.get("/", async (req, res) => {
    try {
      await ConnectToDb();
      const data = await userModel.find({});
      res.status(200).send(data);
    } catch (error) {
      console.log("error..");
    }
  });

  router.post("/", async (req, res) => {
    try {
      await ConnectToDb();
      const request = await userModel.create(req.body);
      request.save();
      res.status(201).send(request);
    } catch (error) {
      res.status(404).send("Failed");
      res.end();
    }
  });

  router.get("/:id", async (req, res) => {
    const data = await userModel.findOne({ _id: req.params.id });
    res.send(data);
  });

  router.patch("/:id", async (req, res) => {
    const data = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    await data.save();
    res.send(data);
  });

  router.delete("/:id", async (req, res) => {
    await userModel.deleteOne({ _id: req.params.id });
    res.send("OK");
  });

  return router;
}