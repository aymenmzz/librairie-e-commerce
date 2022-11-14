import { client } from "./client";

const topFiveBooksId = [
  "6359638b2029f92b7ad44bcd",
  "6359639e2029f92b7ad44bd3",
  "6359638f2029f92b7ad44bce",
  "635963a02029f92b7ad44bd4",
  "635963872029f92b7ad44bcc",
];

export const getBooks = async () => {
  await client.connect();
  const books = await getDataFromCollection("books");
  await client.close();
  return books;
};

export const getTopFive = async () => {
  await client.connect();
  const data = await getDataFromCollection("books");
  const topFive = sortTopFiveFromBooks(data);
  await client.close();
  return topFive;
};

export const getAuthors = async () => {
  await client.connect();
  const authors = await getDataFromCollection("authors");
  await client.close();
  return authors;
};

const getDataFromCollection = async (collectionName) => {
  const db = client.db("books");
  const collection = db.collection(collectionName);
  const data = await collection.find().toArray();
  return data;
};

const sortTopFiveFromBooks = (data) =>
  topFiveBooksId.map((book) => data.find((val) => book === val._id.toString()));
