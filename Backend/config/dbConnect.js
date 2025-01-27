const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect('mongodb+srv://adarshanayakak:Adarsha_22372003@cluster0.qv0pb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;
