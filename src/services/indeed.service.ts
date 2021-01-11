import { AxiosResponse } from "axios"
import { http } from "../helpers"

console.log(process)

const BASE_URL = 'https://fr.indeed.com/'

http.defaults.headers = {
  'Cookie': 'CTK=1erom3jhlstgk800; ctkgen=1; JSESSIONID=E4B8C5612EB4C0CC91ADCA94EBD44B6E; INDEED_CSRF_TOKEN=TdPnR0UARdWXmTmWWyLV9maSZvKsYv9Q; jasxMarvin=1; UD="LA=1610367487:CV=1610367487:TS=1610367487:SG=20cd7d7a354b9a9e1ca9464dc1fe14d5"; loctip=1; RQ="q=Informatique+Client+Final&l=&ts=1610367487646"; jaSerpCount=1; PPN=1'
}

const getListOfJobToulouseDevWeb = async () => {
  let response: AxiosResponse
  try {
    response = await  http.get(`${BASE_URL}emplois?q=Informatique%20Client%20Final&ts=1602770352141&rq=1&rsIdx=0&fromage=last&newcount=401`)
  } catch (error: unknown) {
    return {error}
  }
  return response.data
}

export const indeedServices = {
  getListOfJobToulouseDevWeb
}