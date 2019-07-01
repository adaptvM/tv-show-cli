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

module.exports = processRes;