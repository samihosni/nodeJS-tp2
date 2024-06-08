const express = require('express');
const app = express();
const voiture=require('./routes/voiture')
const mongoose=require('mongoose')
const dotenv= require('dotenv')
const PORT = 3000;
dotenv.config()
const MONGODB_URI=process.env.MONGODB_URI
app.use(express.json());
app.use('/voiture',voiture)

mongoose.connect(MONGODB_URI).then(()=>{
  console.log('Connected to MONGODB');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
}).catch((err)=>{
  console.error('Error connecting to MONGODB:',err.message)
})
module.exports=app;


