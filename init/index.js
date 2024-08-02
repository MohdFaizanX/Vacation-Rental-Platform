const mongoose = require("mongoose");
const initData = require("C:/Users/mohdf/Desktop/Development/PROJECT/MAJOR_PROJECT/init/data.js");
const Listing = require("C:/Users/mohdf/Desktop/Development/PROJECT/MAJOR_PROJECT/model/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB= async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();