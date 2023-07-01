const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/codeial_development', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to the database!');
    } catch (error) {
      console.error('Failed to connect to the database:', error);
    }
  }
  
connectToDatabase();

