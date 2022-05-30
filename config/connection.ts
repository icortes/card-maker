import mongoose from 'mongoose';

export default function connect() {
  try {
    const connection = mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost/card-maker-data'
    );
    console.log('Connected to Cluster.');

    return connection;
  } catch (error) {
    console.log(error);
  }
}
