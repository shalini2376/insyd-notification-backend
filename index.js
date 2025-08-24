
require('dotenv').config();  // Load environment variables
require('./config/db');             // Connect to MongoDB before anything else

const express = require("express");
const cors = require("cors");

const eventRoutes = require("./routes/eventRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

console.log("MongoDB URI:", process.env.MONGODB_URI);

const app = express();

app.use(express.json());
app.use(cors());

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Notification Backend is running...");
});

// Routes
app.use("/events", eventRoutes);
app.use("/notifications", notificationRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

