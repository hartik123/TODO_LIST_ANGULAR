// mongodb+srv://hartiktodolistapp:hartik123@cluster0.ewf0cut.mongodb.net/


const mongoose = require('mongoose');
const dbURI = '***REMOVED***';
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