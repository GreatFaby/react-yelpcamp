const app = require('./app');
const path = require('path');
const port = process.env.PORT;
const express = require('express');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
