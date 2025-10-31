const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentData',{
  useUnifiedTopology:true,
  useNewUrlParser:true
}).then(()=>{
  console.log('Connected to MongoDB!');
}).catch((e)=>{
  console.log(' Failed to Connected to MongoDB!');
});

module.exports = mongoose;