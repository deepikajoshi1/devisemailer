const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = Schema(
  {
    email: { type: String, required: true },
    salutation: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true }
  },
  { timestamps: true }
);
// const User = mongoose.model("User", userSchema);
// module.exports = {
//   User: User
// };
module.exports = mongoose.model("User", userSchema);
