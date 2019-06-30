const fetch = require("node-fetch");

const find = async function (url) {
  const seek = fetch(url);

  const response = await seek.then(value => value.json()).catch(err => err);

  return response;


};

module.exports = find;