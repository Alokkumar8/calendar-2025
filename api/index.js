const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');


app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.get('/calendar', (req, res) => {
  res.status(500).json({ message: 'API error! Please try again later' });
})

app.get('/holidays', (req, res) => {
  fetch(`https://date.nager.at/api/v3/publicholidays/2025/${req.query.country}`)
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'API error! Please try again later' });
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(3000, () => console.log("Running on port 3000"));

module.exports = app;