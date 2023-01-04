const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

//Connect DB

connectDB();

app.use(
  cors({
    origin: "*",
  })
);

//Init Middleware
app.use(express.json({ extended: true }));

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port : ${PORT}`));
