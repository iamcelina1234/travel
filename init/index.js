const mongoose = require("mongoose") ;
const initData =  require("./data.js") ;
const Listing = require("../models/listing.js") ;
const Mongo_URL = 'mongodb://127.0.0.1:27017/wanderlust';
main()
.then(() =>{
    console.log("connected to database") ;
}).catch(err =>{
    console.log(err);
})  ;
async function main() {
    await mongoose.connect(Mongo_URL);
  } 
;
  const initDb = async () => {
   await Listing.deleteMany({}) ;
   initData.data = initData.data.map((obj)=>({...obj , owner : '681a423e7ec4f643c7d84fab'}));
   await Listing.insertMany(initData.data) ;
   console.log("Data is initialzied") ;
  } ;
  initDb() ;