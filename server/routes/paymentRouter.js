import Express from "express";
import mongoose from "mongoose";

export async function ConnectToDb() {
  await mongoose.connect("mongodb://localhost:27017/Event");
}

export function PaymentRouter() {
  const router = Express.Router();

  const paymentSchema = new mongoose.Schema({
    registrationId: {
      type: String,
      required: true,
    },
  });

  const paymentModel = mongoose.model("Payment", paymentSchema);

  router.get("/", async (req, res) => {
    try {
      await ConnectToDb();
      const data = await paymentModel.find({});
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send("No data found");
      res.end();
    }
  });

  router.post("/", async (req, res) => {
    try {
      await ConnectToDb();
      const request = await paymentModel.create(req.body);
      request.save();
      res.status(201).send(request);
    } catch (error) {
      res.status(404).send("Failed to create");
      res.end();
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const data = await paymentModel.findOne({ _id: req.params.id });
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send("No data found");
      res.end();
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      const data = await paymentModel.findOneAndUpdate(
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
      await paymentModel.deleteOne({ _id: req.params.id });
      res.status(200).send("Deleted");
    } catch (error) {
      res.status(404).send("Failed to delete");
      res.end();
    }
  });
  return router;
}
