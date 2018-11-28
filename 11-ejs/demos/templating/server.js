'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Set the view engine for templating
app.set('we need to put stuff here');

// Array of groceries for /list route
let list = ['apples', 'celery', 'butter', 'milk', 'eggs'];

// Array of quantities for /quantities route
let quantities = [
  {name: 'apples', quantity: 4},
  {name: 'celery', quantity: 1},
  {name: 'butter', quantity: 3},
  {name: 'milk', quantity: 2},
  {name: 'eggs', quantity: 12}
]

// ROUTES

// Route to show that we can send HTML strings from server
app.get('/wut', (request, response) => {
  console.log('in the "wut" route');
  response.send('<h1>TA team FTW</h1><ol><li>David</li><li>Madi</li><li>Hanner</li></ol><img src="http://demi.dog/2.jpg" />');
})

// Route for home view
// app.get()

// Route for list view
// app.get()

// Route for quantities view
// app.get()

// Catch-all route for anything that is not handled
// app.get();

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
