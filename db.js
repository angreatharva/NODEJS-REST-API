const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://angreatharva08:rtyDFNKLorFHZpz3@nueralife-dev-server.ucti4c5.mongodb.net/nueralife-dev-server?retryWrites=true&w=majority&appName=NueraLife-Dev-Server/StudentData',{
  useUnifiedTopology:true,
  useNewUrlParser:true
}).then(()=>{
  console.log('Connected to MongoDB!');
}).catch((e)=>{
  console.log(' Failed to Connected to MongoDB!');
});

module.exports = mongoose;