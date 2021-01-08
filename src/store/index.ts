import { createStore } from 'vuex'
import { store as brawlstars, BrawlstarsStore, State as BrawlstarsState } from './brawlstars'
import { store as documents, DocumentsStore, State as DocumentsState } from './documents'

export type RootState = {
  documents: DocumentsState
  brawlstars: BrawlstarsState
}

export type Store = DocumentsStore<Pick<RootState, 'documents'>>
 & BrawlstarsStore<Pick<RootState, 'brawlstars'>>

export const store = createStore({
  modules: {
    brawlstars,
    documents
  },
})

export default {
  store
}
