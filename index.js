// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const eventRoutes = require("./routes/eventRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// 🔗 Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/insyd_notifications", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error(" MongoDB Connection Error:", err));

// ✅ Simple Health Check
app.get("/", (req, res) => {
  res.send("Notification Backend is running...");
});

//  Routes
app.use("/events", eventRoutes);
app.use("/notifications", notificationRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
