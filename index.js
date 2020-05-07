const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
    secret: 'akrat icob icoB',
    saveUninitialized: true,
	resave: true
}));

app.set('view engine', 'ejs');
app.use(flash());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('public'));

require('./route/index')(app);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.end("Hiba...");
});

app.listen(3000, function () {
    console.log('Hello :3000');
});
