const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
];

app.get('/api/data', (req, res) => {
  res.status(200).json(data);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});