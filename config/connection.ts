import mongoose from 'mongoose';

const connectionState = {
  isConnected: false,
};

export default function dbConnect() {
  try {
    // checks if we are already connected to the db
    if (connectionState.isConnected) return;

    const connection = mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost/card-maker-data'
    );

    connectionState.isConnected = true;

    console.log('Connected to Cluster.');

    return connection;
  } catch (error) {
    console.log(error);
  }
}
