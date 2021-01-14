import { AxiosResponse } from "axios"
import { http } from "../helpers"

const BASE_URL = 'https://lit-fortress-71878.herokuapp.com/test/https://www.welcometothejungle.com/fr/jobs?page=1&sortBy=mostRecent&aroundQuery=Toulouse%2C%20France&query=d%C3%A9veloppeur&refinementList%5Bcontract_type_names.fr%5D%5B%5D=CDI&aroundLatLng=43.60579%2C1.44864&aroundRadius=20000'

const getListOfJobToulouseDevWeb = async (): Promise<string> => {
  let response: AxiosResponse
  try {
    response = await http.get(`${BASE_URL}`)
  } catch (error: unknown) {
    return error.toString()
  }
  return response.data
}

export const welcomeToTheJungleServices = {
  getListOfJobToulouseDevWeb
}
