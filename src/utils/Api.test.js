import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getItem, getList} from './Api';
import { API_URL } from './constants'

describe('getItem', () => {
    it('success case', async () => {
        var mock = new MockAdapter(axios);
        const expectedResult = { resolved: true, data: 3 }
        mock.onGet(`${API_URL}/item/2.json`).reply(200, expectedResult.data);
        const result = await getItem(2)
        expect(result).toEqual(expectedResult)
    })

    it('Error case', async () => {
      var mock = new MockAdapter(axios);
      const expectedResult = { resolved: false, data: new Error("Request failed with status code 500") }
      mock.onGet(`${API_URL}/item/2.json`).reply(500, expectedResult.data);
      const result = await getItem(2)
      expect(result).toEqual(expectedResult)
    })
})

describe('getList', () => {
  it('success case', async () => {
      var mock = new MockAdapter(axios);
      const expectedResult = { resolved: true, data: 3 }
      mock.onGet(`${API_URL}/2.json`).reply(200, expectedResult.data);
      const result = await getList(2)
      expect(result).toEqual(expectedResult)
  })

  it('Error case', async () => {
    var mock = new MockAdapter(axios);
    const expectedResult = { resolved: false, data: new Error("Request failed with status code 500") }
    mock.onGet(`${API_URL}/2.json`).reply(500, expectedResult.data);
    const result = await getList(2)
    expect(result).toEqual(expectedResult)
  })
})

