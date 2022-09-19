import "dotenv/config";

export default {
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: "./src/db/migrations",
    stub: "./src/db/migration.stub",
  },
};
