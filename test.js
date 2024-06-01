const express = require('express');
const app = express();
const voiture=require('./routes/voiture')
const PORT = 3000;
app.use(express.json());
app.use('/voiture',voiture)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });