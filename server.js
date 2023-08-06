// server.js

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const homePath = path.join(__dirname, 'service.html');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sp', (req, res) => {
  // Check if the home.html file exists
  fs.access(homePath, fs.constants.F_OK, (err) => {
    if (err) {
      // If the file does not exist, return a 404 error
      res.status(404).send('Not Found');
    } else {
      // If the file exists, serve it
      res.sendFile(homePath);
    }
  });
});

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
