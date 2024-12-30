import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

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
app.use("/api/auth", authRoutes);


// The error handling middleware. This middleware will be triggered whenever next(error) is called.
// err means the error, the input of our middleware. So if any error happens we can send it to this
// next - when we need to go to the next middleware, we use this
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode: statusCode
  });
});