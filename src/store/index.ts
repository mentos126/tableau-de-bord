import { createStore } from 'vuex'

import { store as brawlstars, State as BrawlstarsState, BrawlstarsStore } from './brawlstars'
import { store as documents, State as DocumentsState, DocumentsStore } from './documents'
import { store as indeed, State as IndeedState, IndeedStore } from './indeed'
import { store as linkedIn, State as LinkedInState, LinkedInStore } from './linkedIn'

export type RootState = {
  documents: DocumentsState,
  brawlstars: BrawlstarsState,
  linkedIn: LinkedInState,
  indeed: IndeedState
}

export type Store = DocumentsStore<Pick<RootState, 'documents'>>
 & BrawlstarsStore<Pick<RootState, 'brawlstars'>>
 & LinkedInStore<Pick<RootState, 'linkedIn'>>
 & IndeedStore<Pick<RootState, 'indeed'>>

export const store = createStore({
  modules: {
    brawlstars,
    documents,
    linkedIn,
    indeed
  },
})

export default {
  store
}
