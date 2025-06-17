require('dotenv').config();
const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;;
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database connected successfully');
})
.catch(err => {
    console.error('Database connection error:', err);
});