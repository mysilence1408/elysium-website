import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO;

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO environment variable inside .env.local"
  );
}

let isConnected = false; // Track the connection state

const connect = async () => {
  if (isConnected) {
    // Use existing connection
    return;
  }

  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw new Error("Database connection failed");
  }
};

export default connect;
