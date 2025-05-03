require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const recordRoutes = require("./routes/recordRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://finance-tracker-blush-kappa.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to MongoDB database successful"))
  .catch((error) => console.log("MongoDB connection error:", error));

app.use("/api/not", recordRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
