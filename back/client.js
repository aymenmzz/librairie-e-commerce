const { MongoClient } = require("mongodb");
export const client = new MongoClient(process.env.MONGO_URI);
