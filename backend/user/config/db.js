import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect("mongodb+srv://agpt4455:8WTWCFExlaRS3Kl6@cluster0.ex6e8.mongodb.net/plantopia?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("DB Connected"))
    .catch(err=>console.log(err.message));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.