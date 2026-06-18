const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });

const app = express();
const connectDB = require("./config/db");
connectDB();
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Importing Routes
const contactRoutes = require("./routes/contact");

// Using Routes

app.use("/api/contact", contactRoutes);

app.get('/', (req, res)=>{
return res.send("Hellow Word");
})
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});