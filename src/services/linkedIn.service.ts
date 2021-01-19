import { AxiosResponse } from "axios"
import { http } from "../helpers"

const BASE_URL = 'https://lit-fortress-71878.herokuapp.com/test/https://fr.linkedin.com/jobs/search?keywords=D%C3%A9veloppeur%2BWeb&location=Toulouse%2C%2BOccitanie%2C%2BFrance&trk=homepage-jobseeker_jobs-search-bar_search-submit&distance=10&f_TP=1%2C2&sortBy=DD&redirect=false&position=1&pageNum=0'

const getListOfJobToulouseDevWeb = async () => {
  let response: AxiosResponse
  try {
    // response = await  http.get(`${BASE_URL}jobs/search/?geoId=90009691&keywords=D%C3%A9veloppeur%20web&location=Toulouse%20et%20p%C3%A9riph%C3%A9rie&sortBy=R&start=25`, {withCredentials: true})
    response = await  http.get(`${BASE_URL}`)
  } catch (error: unknown) {
    return {error}
  }
  return response.data
}

export const linkedInServices = {
  getListOfJobToulouseDevWeb
}
