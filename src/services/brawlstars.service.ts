import { http } from "../helpers"

const BASE_URL = 'https://lit-fortress-71878.herokuapp.com/test/https://www.starlist.pro/stats/'

// http.defaults.headers.common = {
//   'Authorization': `bearer ${process.env.BRAWLSTARS_TOKEN}`
// }

// console.log(import.meta.env)

const getOneProfile = (playerId: string): Promise<string> => {
  return http.get(`${BASE_URL}profile/${playerId}`)
    .then(response => response.data)
}

export const brawlstarsServices = {
  getOneProfile
}
