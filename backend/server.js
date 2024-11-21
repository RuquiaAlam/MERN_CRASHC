import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import path from "path";
//built in node module

import productRoutes from "./routes/product.route.js";
dotenv.config();
const app = express();

const port = process.env.port || 5000;
const __dirname = path.resolve();

//to accept the request from body
//allows json data to parse from req.body
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production") {
  //dist =>static asset
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(port, () => {
  connectDB();
  console.log(`Sever started on localhost ${port} hello`);
});
app.get("/", (req, res) => {
  res.json({ message: `Server is ready` });
});
