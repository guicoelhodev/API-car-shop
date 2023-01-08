import express from "express";
import { categoriesRoutes } from "./routes/categories";
const app = express();

const port = 8080;

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
