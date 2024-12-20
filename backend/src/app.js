import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import customerRoutes from './presentation/customerController.js';

dotenv.config();

const app = express();

const FRONTEND_ENV = process.env.FRONTEND_ENV || "http://localhost:5173";


app.use(
  cors({
    origin: FRONTEND_ENV.replace(/\/$/, ""),
    credentials: true,
  })
);

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});

app.use('/api', customerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
