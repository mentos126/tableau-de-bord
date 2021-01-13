import { AxiosResponse } from "axios"
import { http } from "../helpers"

const BASE_URL = 'https://lit-fortress-71878.herokuapp.com/test/https://www.sudouestjob.com/emplois/recherche.html?k=D%C3%A9veloppeur+web&k_autocomplete=Informatiique&l=Toulouse+31000&l_autocomplete=http://www.rj.com/commun/localite/commune/31555&c=CDI&d=w&p=1'
// const BASE_URL = 'https://lit-fortress-71878.herokuapp.com/test/https://www.sudouestjob.com/searchoffers/getsearchfacets?k=D%C3%A9veloppeur+web&k_autocomplete=Informatiique&l=Toulouse+31000&l_autocomplete=http://www.rj.com/commun/localite/commune/31555&c=CDI&d=w&p=-1&mode=scroll'

const getListOfJobToulouseDevWeb = async (): Promise<string> => {
  let response: AxiosResponse
  try {
    response = await http.get(`${BASE_URL}`)
  } catch (error: unknown) {
    return error.toString()
  }
  return response.data
}

export const sudOuestJobServices = {
  getListOfJobToulouseDevWeb
}
