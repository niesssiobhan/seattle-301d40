'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood (rawDataObject) {
  for (let key in rawDataObject) {
    console.log('key', key);
    this[key] = rawDataObject[key];
  }
}

Neighborhood.prototype.toHtml = function() {
  // 1. Get the template from the HTML document
  const source = $('#neighborhood-template').html();
  // console.log(source);
  // 2. Use Handlebars to "compile" the HTML
  const template = Handlebars.compile(source);
  // console.log('template', template);
  // 3. Do not forget to return the HTML from this method
  return template(this);
};

neighborhoodDataSet.forEach(neighborhoodObject => {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
