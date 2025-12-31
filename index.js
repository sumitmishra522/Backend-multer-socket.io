const express = require("express");
const app = express()

  require("dotenv").config();
const uploadRoutes = require('./routes/uploadRoutes')




app.use(express.json())

app.use("/api", uploadRoutes)

const PORT = process.env.PORT || 8000 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

