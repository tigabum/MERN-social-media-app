import config from "./config/config.js";
import app from "./express.js";
import mongoose from "mongoose";

// Setting up Mongoose and connecting to mongodb
mongoose.connect(
  config.mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
//   console.log("mongo is connected")
);

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// Starting the server
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`Server is started on port ${config.port}`);
});
