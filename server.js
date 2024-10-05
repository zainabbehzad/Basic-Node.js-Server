const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/users.json', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'users.json'));
});

app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});