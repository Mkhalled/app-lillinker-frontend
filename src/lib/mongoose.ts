import mongoose from 'mongoose';
import { logger } from './logger';
let isConnected: boolean = false;

export const connectToDb = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) {
    logger.info('MONGODB_URL is not defined ');
    return console.log('MONGODB_URL is not defined');
  }

  if (isConnected) console.log('=> using existing database connection');

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log('=> MongoDB connected');
  } catch (error: any) {
    console.log('connectToDb' + error.message);
  }
};
