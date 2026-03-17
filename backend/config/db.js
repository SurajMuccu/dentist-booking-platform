import mongoose from "mongoose"

const connectDB = async () => {
  try {

    await mongoose.connect(
      "mongodb://surajchinni188_db_user:Suraj123@ac-oe0zyg3-shard-00-00.mduquxq.mongodb.net:27017,ac-oe0zyg3-shard-00-01.mduquxq.mongodb.net:27017,ac-oe0zyg3-shard-00-02.mduquxq.mongodb.net:27017/dentistDB?ssl=true&replicaSet=atlas-d0fs51-shard-0&authSource=admin&retryWrites=true&w=majority"
    )

    console.log("MongoDB connected")

  } catch (error) {

    console.log("Database error", error)

  }
}

export default connectDB