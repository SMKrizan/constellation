const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/constellation', {
    // directs findOneAndUpdate() and findOneAndModify() to use native findOneAndUpdate() rather than findAndModify()
    useFindAndModify: false,
    // allows users to fallback to old parser if current (new) parser is buggy
    useNewUrlParser: true,
    // uses MongoDB driver's new connection management engine
    useUnifiedTopology: true
});

// use this to log Mongo queries being executed
mongoose.set('debug', true);
// tells mongoose to use createIndexes instead of ensureIndex
mongoose.set('useCreateIndex', true);


app.listen(PORT, () => console.log(`Now connected to localhost:${PORT}`));