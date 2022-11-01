const express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => {
    console.log(`App is running on PORT ${PORT}`);
})