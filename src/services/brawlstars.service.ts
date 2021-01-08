import { http } from "../helpers"

console.log(process)

http.defaults.baseURL = 'https://api.brawlstars.com/v1/'
http.defaults.headers.common = {
  'Authorization': `bearer ${process.env.BRAWLSTARS_TOKEN}`
}

const getOneProfile = (playerId: string) => {
  return http.get(`players/%23${playerId}`)
    .then(response => response.data)
}

export const brawlstarsServices = {
  getOneProfile
}
