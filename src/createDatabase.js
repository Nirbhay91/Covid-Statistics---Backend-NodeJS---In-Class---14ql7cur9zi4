const { connection } = require("./connector");
const { data } = require("./data");

const refreshAll = async () => {
  await connection.deleteMany({});
  const insertedData = await connection.insertMany(data);
};

refreshAll();
