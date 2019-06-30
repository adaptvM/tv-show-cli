require("node-fetch");
import find from '../../utils/fetch';
const fetchMock = require('fetch-mock');

describe('asyncFetch', () => {
  it('can fetch', async () => {
    const data = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }

    fetchMock.get('http://fake-news.com/', data)

    const call = find('http://fake-news.com/');

    const response = await call.then(value => value);
    console.log(response);
    expect(response.title).toEqual("delectus aut autem");

  })

})