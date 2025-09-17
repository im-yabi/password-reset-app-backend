const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config(); // ✅ Loads environment variables

connectDB(); // ✅ Connects to MongoDB

const app = express();
app.use(cors()); // ✅ Allows cross-origin requests
app.use(express.json()); // ✅ Parses JSON bodies

// ✅ Authentication routes
app.use("/api/auth", require("./routes/authRoutes"));

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
