const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome User!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
