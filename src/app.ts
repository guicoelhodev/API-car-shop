import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import { router } from "./routes";
const app = express();

const port = 8080;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
