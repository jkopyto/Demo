import {GoogleVisionApi} from "../../src/infrastructure/GoogleVisionApi";
import {anImage} from "../fixtures";

describe("GoogleVisionApi", () => {

  const httpClient = jest.fn()
  const apiKey = "sample api key"
  const googleVisionApi = GoogleVisionApi({apiKeyProvider: () => apiKey, httpClient})

  describe("recognizeImage", () => {

    let requestResponse;

    beforeEach(() => {
      httpClient.mockResolvedValue({
        ok: true,
        json: () => aGoogleVisionApiResponse
      })
      requestResponse = googleVisionApi.recognizeImage({image: anImage})
    })

    it("should send web detection request to Google Vision API", () => {
      expect(httpClient).toBeCalled()
    })

    it("should use api key for Google Vision API", () => {
      expect(httpClient.mock.calls[0][0]).toBe(googleVisionApiUrl(apiKey))
    })

    it("should extract recognized resource from the response", () => {
      return expect(requestResponse).resolves.toBe("Chewbacca")
    })

  })

})

const googleVisionApiUrl = (apiKey) => `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`

const aGoogleVisionApiRequest = (image) => ({
  requests: [
    {
      features: [
        {
          type: "WEB_DETECTION",
          maxResults: 1
        }
      ],
      image: {
        content: image
      }
    }
  ]
})

const aGoogleVisionApiResponse = {
  "responses": [
    {
      "webDetection": {
        "webEntities": [
          {
            "entityId": "/m/0fkfk",
            "score": 1.1150999,
            "description": "Chewbacca"
          }
        ],
        "fullMatchingImages": [
          {
            "url": "https://starwars-visualguide.com/assets/img/characters/13.jpg"
          }
        ],
        "partialMatchingImages": [
          {
            "url": "http://imgur.com/aehMu6v.jpg"
          }
        ],
        "pagesWithMatchingImages": [
          {
            "url": "https://screenrant.com/star-wars-rise-skywalker-chewbacca-medal/",
            "pageTitle": "\u003cb\u003eStar Wars\u003c/b\u003e: The Truth of \u003cb\u003eChewbacca&#39;s\u003c/b\u003e Medal Explained By Comics",
            "partialMatchingImages": [
              {
                "url": "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/01/Star-Wars-Chewbacca-Medal-Bravery.jpg"
              }
            ]
          }
        ],
        "visuallySimilarImages": [
          {
            "url": "https://vignette.wikia.nocookie.net/star-wars-anthology-films/images/4/4f/Chewbacca-TFA.png/revision/latest/top-crop/width/360/height/360?cb=20170704113136"
          }
        ],
        "bestGuessLabels": [
          {
            "label": "star wars movies chewbacca",
            "languageCode": "en"
          }
        ]
      }
    }
  ]
}
