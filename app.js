require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Report = require("./models/Report");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const { verifyToken } = require("./middleware");
const multer = require("multer");
const { storage } = require("./cloudinary");
const upload = multer({ storage: storage });

mongoose.connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/MedVault");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function createToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY);
}

app.get("/", (req, res) => {
  console.log("Connected!!!");
  res.json({ message: "This is the backend code for MedVault" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const verifyPassword = await bcrypt.compare(password, user.password);
  if (!verifyPassword) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = createToken(user._id);
  res.json({ token: token });
});

app.post("/register", async (req, res) => {
  const { username, password, hospitalName } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await new User({
    username: username,
    password: hashedPassword,
    hospitalName: hospitalName,
  }).save();
  res.json({ user: user });
});

app.get("/profile", verifyToken, async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id);
  res.json({ user: user });
});

app.get("/reports", verifyToken, async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id);

  const reports = await Report.find({ userId: user._id });
  res.json({ reports: reports });
});

app.post(
  "/reports",
  upload.single("reportUrl"),
  verifyToken,
  async (req, res) => {
    const { id } = req.user;
    const reportUrl = req.file ? req.file.path : null;
    const user = await User.findById(id);
    const {
      disease,
      description,
      clinicalHistory,
      findings,
      doctorName,
      time,
      recordType,
    } = req.body;
    const report = new Report({
      disease,
      description,
      clinicalHistory,
      findings,
      doctorName,
      time,
      recordType,
      userId: user,
      reportUrl: reportUrl,
    });
    await report.save();
    res.json({ report: report });
  }
);

app.listen(3000, () => {
  console.log("Server running on PORT:3000");
});
