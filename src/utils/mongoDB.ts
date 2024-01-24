import mongoose from "mongoose";

const connectDB = async () => {
  const connectionString: string = process.env.DB_CONNECTION_STRING || "";
  try {
    await mongoose.connect(connectionString);
    console.log("DB connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
