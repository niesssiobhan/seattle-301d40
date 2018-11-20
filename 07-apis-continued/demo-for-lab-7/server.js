'use strict';

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Setup
const PORT = process.env.PORT;

const app = express();

app.use(cors());


// API Routes

app.get('/location', (request, response) => {
  const locationData = searchToLatLong(request.query.data);
  response.send(locationData);
});

// Helper Functions

function searchToLatLong(query) {
  const geoData = require('./data/geo.json');
  const location = new Location(geoData.results[0]);
  location.search_query = query;
  return location;
}
function Location(data) {
  this.formatted_query = data.formatted_address;
  this.latitude = data.geometry.location.lat;
  this.longitude = data.geometry.location.lng;
}

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is up on ${PORT}`));
