<template>
  <div class="app-welcometothejungle" v-html="welcomeToTheJungle"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from 'vue'
import { removeHtmlElement, stringToHTML } from '../helpers'

export default defineComponent({
  name: 'AppWelcomeToTheJungle',
  props: {
    html: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup (props) {
    const { html } = toRefs(props)

    const welcomeToTheJungle = ref()

    const tranformHtml = () => {
      const sudOuestJobBody1 = stringToHTML(html.value).querySelectorAll('.container')
      console.log(sudOuestJobBody1)
      const sudOuestJobBody = sudOuestJobBody1
      let jobs = ''
      for (let el = 0; el < sudOuestJobBody.length; el++) {
        // removeHtmlElement(sudOuestJobBody[el], '.bookmark')

        // sudOuestJobBody[el].querySelectorAll('img').forEach(element => {
        //   if (element.getAttribute('data-original')) {
        //     element.src = element.getAttribute('data-original')
        //   }
        // })

        jobs += '<div class="item">' + sudOuestJobBody[el].innerHTML + '</div>'
      }
      welcomeToTheJungle.value = html.value
    }

    watch(html, tranformHtml)

    onMounted(tranformHtml)

    return {
      welcomeToTheJungle
    }
  }
})
</script>

curl 'https://csekhvms53-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.24.12%3Breact-instantsearch%205.3.2%3BJS%20Helper%20(2.28.1)&x-algolia-application-id=CSEKHVMS53&x-algolia-api-key=02f0d440abc99cae37e126886438b266' \
  -H 'Connection: keep-alive' \
  -H 'Pragma: no-cache' \
  -H 'Cache-Control: no-cache' \
  -H 'sec-ch-ua: "Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"' \
  -H 'accept: application/json' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'Origin: https://www.welcometothejungle.com' \
  -H 'Sec-Fetch-Site: cross-site' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://www.welcometothejungle.com/' \
  -H 'Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6,pt;q=0.5' \
  --data-raw '{"requests":[{"indexName":"wk_cms_jobs_production","params":"query=d%C3%A9veloppeur&hitsPerPage=30&maxValuesPerFacet=100&page=0&restrictSearchableAttributes=%5B%22name%22%2C%22profile%22%2C%22organization.name%22%2C%22office.city%22%2C%22office.district%22%2C%22office.state%22%2C%22office.country%22%2C%22department%22%2C%22profession.name.fr%22%2C%22profession.category.fr%22%2C%22contract_type_names.fr%22%2C%22sectors.name.fr%22%2C%22sectors.parent.fr%22%5D&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&aroundLatLng=43.60579%2C1.44864&aroundRadius=20000&aroundPrecision=20000&filters=website.reference%3Awttj_fr&disableTypoToleranceOnAttributes=%5B%22profile%22%5D&facets=%5B%22office.country_code%22%2C%22office.state%22%2C%22office.district%22%2C%22office.location%22%2C%22online%22%2C%22remote%22%2C%22contract_type_names.fr%22%2C%22experience_level_minimum%22%2C%22organization.size.fr%22%2C%22language%22%2C%22sectors_name.fr.Architecture%22%2C%22sectors_name.fr.Association%20%2F%20ONG%22%2C%22sectors_name.fr.Banques%20%2F%20Assurances%20%2F%20Finance%22%2C%22sectors_name.fr.Conseil%20%2F%20Audit%22%2C%22sectors_name.fr.Culture%20%2F%20M%C3%A9dia%20%2F%20Divertissement%22%2C%22sectors_name.fr.Distribution%22%2C%22sectors_name.fr.Education%20%2F%20Formation%20%2F%20Recrutement%22%2C%22sectors_name.fr.Food%20et%20boisson%22%2C%22sectors_name.fr.H%C3%B4tellerie%20%2F%20Tourisme%20%2F%20Loisirs%22%2C%22sectors_name.fr.Immobilier%22%2C%22sectors_name.fr.Industrie%22%2C%22sectors_name.fr.L%C3%A9gal%20%2F%20Justice%22%2C%22sectors_name.fr.Mobilit%C3%A9%20%2F%20Transport%22%2C%22sectors_name.fr.Mode%20%2F%20Luxe%20%2F%20Beaut%C3%A9%20%2F%20Art%20de%20vivre%22%2C%22sectors_name.fr.Publicit%C3%A9%20%2F%20Marketing%20%2F%20Agence%22%2C%22sectors_name.fr.Sant%C3%A9%20%2F%20Social%20%2F%20Environnement%22%2C%22sectors_name.fr.Secteur%20public%20et%20administration%22%2C%22sectors_name.fr.Services%20aux%20entreprises%22%2C%22sectors_name.fr.Tech%22%2C%22profession_name.fr.Audit%20%2F%20Finance%20%2F%20Assurance%22%2C%22profession_name.fr.Business%22%2C%22profession_name.fr.Conseil%22%2C%22profession_name.fr.Cr%C3%A9a%22%2C%22profession_name.fr.H%C3%B4tellerie%20%2F%20Restauration%22%2C%22profession_name.fr.Immobilier%22%2C%22profession_name.fr.Industrie%22%2C%22profession_name.fr.Marketing%20%2F%20Communication%22%2C%22profession_name.fr.Media%22%2C%22profession_name.fr.M%C3%A9tiers%20de%20la%20mode%22%2C%22profession_name.fr.Relation%20client%22%2C%22profession_name.fr.Retail%22%2C%22profession_name.fr.Sant%C3%A9%20%2F%20M%C3%A9dical%20%2F%20Social%22%2C%22profession_name.fr.Support%22%2C%22profession_name.fr.Tech%22%2C%22profession_name.fr.Tourisme%22%5D&tagFilters=&numericFilters=%5B%22experience_level_minimum%3E%3D0%22%2C%22experience_level_minimum%3C%3D15%22%5D"},{"indexName":"wk_cms_jobs_production","params":"query=d%C3%A9veloppeur&hitsPerPage=1&maxValuesPerFacet=100&page=0&restrictSearchableAttributes=%5B%22name%22%2C%22profile%22%2C%22organization.name%22%2C%22office.city%22%2C%22office.district%22%2C%22office.state%22%2C%22office.country%22%2C%22department%22%2C%22profession.name.fr%22%2C%22profession.category.fr%22%2C%22contract_type_names.fr%22%2C%22sectors.name.fr%22%2C%22sectors.parent.fr%22%5D&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&aroundLatLng=43.60579%2C1.44864&aroundRadius=20000&aroundPrecision=20000&filters=website.reference%3Awttj_fr&disableTypoToleranceOnAttributes=%5B%22profile%22%5D&attributesToRetrieve=%5B%5D&attributesToHighlight=%5B%5D&attributesToSnippet=%5B%5D&tagFilters=&analytics=false&clickAnalytics=false&facets=experience_level_minimum"},{"indexName":"wk_cms_jobs_production","params":"query=d%C3%A9veloppeur&hitsPerPage=30&maxValuesPerFacet=100&page=0&restrictSearchableAttributes=%5B%22name%22%2C%22profile%22%2C%22organization.name%22%2C%22office.city%22%2C%22office.district%22%2C%22office.state%22%2C%22office.country%22%2C%22department%22%2C%22profession.name.fr%22%2C%22profession.category.fr%22%2C%22contract_type_names.fr%22%2C%22sectors.name.fr%22%2C%22sectors.parent.fr%22%5D&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&aroundLatLng=43.60579%2C1.44864&aroundRadius=20000&aroundPrecision=20000&filters=website.reference%3Awttj_fr&disableTypoToleranceOnAttributes=%5B%22profile%22%5D&facets=%5B%22office.country_code%22%2C%22office.state%22%2C%22office.district%22%2C%22office.location%22%2C%22online%22%2C%22remote%22%2C%22contract_type_names.fr%22%2C%22experience_level_minimum%22%2C%22organization.size.fr%22%2C%22language%22%2C%22sectors_name.fr.Architecture%22%2C%22sectors_name.fr.Association%20%2F%20ONG%22%2C%22sectors_name.fr.Banques%20%2F%20Assurances%20%2F%20Finance%22%2C%22sectors_name.fr.Conseil%20%2F%20Audit%22%2C%22sectors_name.fr.Culture%20%2F%20M%C3%A9dia%20%2F%20Divertissement%22%2C%22sectors_name.fr.Distribution%22%2C%22sectors_name.fr.Education%20%2F%20Formation%20%2F%20Recrutement%22%2C%22sectors_name.fr.Food%20et%20boisson%22%2C%22sectors_name.fr.H%C3%B4tellerie%20%2F%20Tourisme%20%2F%20Loisirs%22%2C%22sectors_name.fr.Immobilier%22%2C%22sectors_name.fr.Industrie%22%2C%22sectors_name.fr.L%C3%A9gal%20%2F%20Justice%22%2C%22sectors_name.fr.Mobilit%C3%A9%20%2F%20Transport%22%2C%22sectors_name.fr.Mode%20%2F%20Luxe%20%2F%20Beaut%C3%A9%20%2F%20Art%20de%20vivre%22%2C%22sectors_name.fr.Publicit%C3%A9%20%2F%20Marketing%20%2F%20Agence%22%2C%22sectors_name.fr.Sant%C3%A9%20%2F%20Social%20%2F%20Environnement%22%2C%22sectors_name.fr.Secteur%20public%20et%20administration%22%2C%22sectors_name.fr.Services%20aux%20entreprises%22%2C%22sectors_name.fr.Tech%22%2C%22profession_name.fr.Audit%20%2F%20Finance%20%2F%20Assurance%22%2C%22profession_name.fr.Business%22%2C%22profession_name.fr.Conseil%22%2C%22profession_name.fr.Cr%C3%A9a%22%2C%22profession_name.fr.H%C3%B4tellerie%20%2F%20Restauration%22%2C%22profession_name.fr.Immobilier%22%2C%22profession_name.fr.Industrie%22%2C%22profession_name.fr.Marketing%20%2F%20Communication%22%2C%22profession_name.fr.Media%22%2C%22profession_name.fr.M%C3%A9tiers%20de%20la%20mode%22%2C%22profession_name.fr.Relation%20client%22%2C%22profession_name.fr.Retail%22%2C%22profession_name.fr.Sant%C3%A9%20%2F%20M%C3%A9dical%20%2F%20Social%22%2C%22profession_name.fr.Support%22%2C%22profession_name.fr.Tech%22%2C%22profession_name.fr.Tourisme%22%2C%22sectors.parent.fr%22%2C%22profession.category.fr%22%5D&tagFilters=&numericFilters=%5B%22experience_level_minimum%3E%3D0%22%2C%22experience_level_minimum%3C%3D15%22%5D"},{"indexName":"wk_cms_jobs_production","params":"query=d%C3%A9veloppeur&hitsPerPage=1&maxValuesPerFacet=100&page=0&restrictSearchableAttributes=%5B%22name%22%2C%22profile%22%2C%22organization.name%22%2C%22office.city%22%2C%22office.district%22%2C%22office.state%22%2C%22office.country%22%2C%22department%22%2C%22profession.name.fr%22%2C%22profession.category.fr%22%2C%22contract_type_names.fr%22%2C%22sectors.name.fr%22%2C%22sectors.parent.fr%22%5D&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&aroundLatLng=43.60579%2C1.44864&aroundRadius=20000&aroundPrecision=20000&filters=website.reference%3Awttj_fr&disableTypoToleranceOnAttributes=%5B%22profile%22%5D&attributesToRetrieve=%5B%5D&attributesToHighlight=%5B%5D&attributesToSnippet=%5B%5D&tagFilters=&analytics=false&clickAnalytics=false&facets=experience_level_minimum"}]}' \
  --compressed



<style lang="scss" scopped>
.app-welcometothejungle {
  font-family: 'Noto Sans','Helvetica Neue',Helvetica,Arial,sans-serif !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  position: relative;
}

.item {
  border: solid 2px rgb(80, 72, 72);
  padding: 15px;
  width: 100%;
  max-width: 630px;
  margin: 2.5px;
  border-radius: 15px;
}

</style>
