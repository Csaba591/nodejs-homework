const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/UY8Q7D', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;