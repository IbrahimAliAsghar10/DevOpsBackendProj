const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const data = [
  { id: 1, name: 'John', age: 26 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
];

const users = [
  { id: 1, email: 'user1@example.com', password: 'password1' },
  { id: 2, email: 'user2@example.com', password: 'password2' },
  { id: 3, email: 'user3@example.com', password: 'password3' }
];

app.get('/', (req, res) => {
  res.status(200).json({message:'Hello folks'});
});


app.get('/api/data', (req, res) => {
  res.status(200).json(data);
});

app.post('/login', (req, res) => {
  const {email} = req.body;
  const {password} = req.body;

  
  // Find the user with the matching email and password
  const userOnly = users.find(user => user.email === email && user.password === password);

  // If user is not found, return an error message
  if (!userOnly) {
    return res.status(401).json({ success:false,error: 'Invalid email or password' });
  }

  // Otherwise, return a success message and the user's details
  return res.status(200).json({
    message: 'Login successful',
    user: {
      id: userOnly.id,
      email: userOnly.email
    }
  });
  
});

app.listen(port, () => {
  console.log('Server is running on port',port);
});
module.exports = app;