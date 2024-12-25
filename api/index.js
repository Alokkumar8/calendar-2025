const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');


app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  // res.send('Hello World!')
})

app.get('/in/calendar-2025-india', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'in', 'calendar-2025-india.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(3000, () => console.log("Running on port 3000"));

module.exports = app;