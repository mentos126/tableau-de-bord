import { http } from "../helpers"

console.log(process)

const BASE_URL = 'https://api.brawlstars.com/v1/'

// http.defaults.headers.common = {
//   'Authorization': `bearer ${process.env.BRAWLSTARS_TOKEN}`
// }

console.log(http)

const getOneProfile = (playerId: string) => {
  return http.get(`${BASE_URL}players/%23${playerId}`)
    .then(response => response.data)
}

export const brawlstarsServices = {
  getOneProfile
}
