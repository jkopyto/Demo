import {StarWarsApi} from "../../src/infrastructure/StarWarsApi";

describe("StarWarsApi", () => {

  const httpClient = jest.fn()
  const starWarsApiBaseUrl = "http://star-wars-api.coderscamp"
  const starWarsApi = StarWarsApi({starWarsApiBaseUrl, httpClient})

  describe("find", () => {

    let requestResponse;
    const category = "people"
    const id = 1

    beforeEach(() => {
      httpClient.mockResolvedValue({
        ok: true,
        json: () => aStarWarsApiResponse
      })
      requestResponse = starWarsApi.find({category, id})
    })

    it("should call API for resource with passed category and id", () => {
      expect(httpClient).toBeCalledWith(`${starWarsApiBaseUrl}/${category}/${id}`)
    })

    it("should return name from the response and found id", () => {
      return expect(requestResponse).resolves.toStrictEqual({id, name: "Luke Skywalker"})
    })

  })

})

const aStarWarsApiResponse = {
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.dev/api/planets/1/",
  "films": [
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/6/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/7/"
  ],
  "species": [
    "https://swapi.dev/api/species/1/"
  ],
  "vehicles": [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.dev/api/people/1/"
}
