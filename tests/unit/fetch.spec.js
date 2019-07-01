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

    fetchMock.get('https://jsonplaceholder.typicode.com/todos/1', data)

    const call = find('https://jsonplaceholder.typicode.com/todos/1');

    const response = await call.then(value => value);
    console.log(response);
    expect(response.title).toEqual("delectus aut autem");

  })

})