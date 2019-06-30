const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
const port = 3001;
const find = require('./utils/fetch');


app.use(cors());


const processRes = (arr) => {
  const noImage = "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
  arr.forEach(item => {
    if (item.season.image == null) {
      item.season.image = {};
      item.season.image.medium = noImage;
    }

    if (item.episodes == undefined) {
      item.episodes = {};
      item.episodes.image = {};
      item.episodes.image.medium = noImage;
    }

    if (item.episodes.image == null) {
      item.episodes.image = {};
      item.episodes.image.medium = noImage;
    }
  });

  return arr;
}

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

app.get("/tvshows/:showName", async (req, res) => {
  const tvShows = find(
    `http://api.tvmaze.com/search/shows?q=${req.params.showName}`
  );
  const tvShowArr = await tvShows.then(value => value);

  res.json(tvShowArr);
});

app.get("/seasons/:id", async (req, res) => {
  const seasons = find(`http://api.tvmaze.com/shows/${req.params.id}/seasons`);
  const seasonsArr = await seasons.then(value => value);

  const data = processSeasons(seasonsArr);
  const result = await data.then(value => value);

  res.send(result);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`shhh, listen to port ${port}`);
});
