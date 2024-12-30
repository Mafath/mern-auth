import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/user.route.js'

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.log(error);
})


const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port 3000!!");
});


app.use("/api/user", userRoutes);