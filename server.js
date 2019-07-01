const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const find = require('./utils/fetch');
const processSeasons = require('./utils/processSeasons');


app.use(cors());


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
