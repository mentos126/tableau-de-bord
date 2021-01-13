import { AxiosResponse } from "axios"
import { http } from "../helpers"

const BASE_URL = 'https://lit-fortress-71878.herokuapp.com/test/https://fr.indeed.com/jobs?q=D%C3%A9veloppeur&l=Toulouse+%2831%29&jt=permanent&sort=date&fromage=14'

const getListOfJobToulouseDevWeb = async (): Promise<string> => {
  let response: AxiosResponse
  try {
    response = await http.get(`${BASE_URL}`)
  } catch (error: unknown) {
    return error.toString()
  }
  return response.data
}

export const indeedServices = {
  getListOfJobToulouseDevWeb
}
