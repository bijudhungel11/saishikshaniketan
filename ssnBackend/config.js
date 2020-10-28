export default {
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://bijudhungel:maaA33fU6f8CaKUa@cluster0.5pemo.mongodb.net/<dbname>?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
/* localhost one==>"mongodb://localhost/ssn" */
/* clusters one==>mongodb+srv://bijudhungel:<password>@cluster0.5pemo.mongodb.net/<dbname>?retryWrites=true&w=majority */
