const app = require('./app')
const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://niza33:123456VVv@cluster0.k2zhwys.mongodb.net/test')
  .then(console.log("Database connection successful"))
  .then(() => {
app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
})
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });