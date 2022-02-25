module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 33060),
      database: env("DATABASE_NAME", "site"),
      user: env("DATABASE_USERNAME", "site"),
      password: env("DATABASE_PASSWORD", "site"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
