import {app} from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is working on port : ${PORT} in ${process.env.NODE_ENV} mode`);
  });