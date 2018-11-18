'use strict';

//Load Express
const express = require('express');

//Instantiate Express so that we can use Instantiate
const app = express();

//Designate a Port to serve our app on
const PORT = 3000;

//Define which directory that we will serve files from 
app.use(express.static('.public'));

//Create a route for our bat-country file
app.get('/bats', (req, res) => {
  console.log('the bats route has been hit!');
  res.status(200).sendFile('public/bat-country.html', {root: '.'});
});

//Tell the app to listen so that it can do its thing
app.listen(PORT, () => console.log(`our app is listening on PORT ${PORT}`));