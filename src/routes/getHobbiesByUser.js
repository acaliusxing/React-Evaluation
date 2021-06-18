'use strict';
const mockDBCalls = require('../database/index.js');

const getHobbiesByUsernameHandler = async (request, response) => {
  const nameToLookup = request.query.username;
  const data = await mockDBCalls.getHobbiesByUsername(nameToLookup);
  return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
  app.get('/users/hobbies', getHobbiesByUsernameHandler);
};