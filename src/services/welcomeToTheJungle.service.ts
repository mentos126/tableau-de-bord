import { AxiosResponse } from "axios"
import { http } from "../helpers"

const KEY = 'nPz6BwBCKqd59yTOOCHkrj5tgVhzFmhAjx7IXzOXed3ibc81QxJwPoRcL3sE'

const options = {
	_id: "webscraper-io-landing",
	startUrl: [
		"http://webscraper.io/"
	],
	selectors: [
		{
			parentSelectors: [
				"_root"
			],
			type: "SelectorText",
			multiple: false,
			id: "title",
			selector: "h1",
			regex: "",
			delay: ""
		}
	]
}

// const BASE_URL = 'https://lit-fortress-71878.herokuapp.com/test/https://www.welcometothejungle.com/fr/jobs?page=1&sortBy=mostRecent&aroundQuery=Toulouse%2C%20France&query=d%C3%A9veloppeur&refinementList%5Bcontract_type_names.fr%5D%5B%5D=CDI&aroundLatLng=43.60579%2C1.44864&aroundRadius=20000'
const BASE_URL = `https://lit-fortress-71878.herokuapp.com/test/https://api.webscraper.io/api/v1/sitemap?api_token=${KEY}`

const getListOfJobToulouseDevWeb = async (): Promise<string> => {
  let response: AxiosResponse
  try {
    response = await http.post(`${BASE_URL}`, options)
  } catch (error: unknown) {
    return error.toString()
  }
  return response.data
}

export const welcomeToTheJungleServices = {
  getListOfJobToulouseDevWeb
}
