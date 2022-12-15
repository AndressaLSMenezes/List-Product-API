import app from "./app";
import "dotenv/config";
import "express-async-errors";
import { startDatabase } from "./database";

const PORT = process.env.PORT || 3000;

export default app.listen(PORT, async () => {
  await startDatabase();
  console.log("Server running");
});
