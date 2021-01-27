import { http } from "../helpers"

const BASE_URL = 'https://lit-fortress-71878.herokuapp.com/test/https://tudonumclick.com/programacao-tv'

// console.log(import.meta.env)

const getChannelGuia = (sportChannel: string): Promise<string> => {
  return http.get(`${BASE_URL}/${sportChannel}`)
    .then(response => response.data)
} 

export const sportsGuiaServices = {
  getChannelGuia
}
