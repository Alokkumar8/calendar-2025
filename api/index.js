const express = require('express')
const app = express()
const port = process.env.PORT || 8080;


app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  // res.send('Hello World!')
})

app.get('/in', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/calendar-2025-india.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(8080, () => console.log("Running on port 8080"));

module.exports = app;