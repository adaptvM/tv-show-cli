const find = require('./fetch');
const processRes = require('./processRes');

const processSeasons = async function (arr) {
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    const seek = find(`http://api.tvmaze.com/seasons/${arr[i].id}/episodes`);
    const episodes = await seek.then(value => value);

    resultArr.push({
      season: arr[i],
      episodes: episodes[episodes.length - 1]
    });
  }

  const finalRes = processRes(resultArr);

  return finalRes;
};

module.exports = processSeasons;