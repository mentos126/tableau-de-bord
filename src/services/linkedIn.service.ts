import { AxiosResponse } from "axios"
import { http } from "../helpers"

const BASE_URL = 'https://www.linkedin.com/'

const getListOfJobToulouseDevWeb = async () => {
  let response: AxiosResponse
  try {
    response = await  http.get(`${BASE_URL}jobs/search/?geoId=90009691&keywords=D%C3%A9veloppeur%20web&location=Toulouse%20et%20p%C3%A9riph%C3%A9rie&sortBy=R&start=25`, {withCredentials: true})
  } catch (error: unknown) {
    return {error}
  }
  return response.data
}

export const linkedInServices = {
  getListOfJobToulouseDevWeb
}
