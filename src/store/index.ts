import { createStore } from 'vuex'

import { store as brawlstars, State as BrawlstarsState, BrawlstarsStore, BrawlstarsActionTypes } from './brawlstars'
import { store as documents, State as DocumentsState, DocumentsStore, DocumentsActionTypes } from './documents'
import { store as indeed, State as IndeedState, IndeedStore, IndeedInActionTypes } from './indeed'
import { store as linkedIn, State as LinkedInState, LinkedInStore, LinkedInActionTypes } from './linkedIn'
import { store as sudOuestJob, State as SudOuestJobState, SudOuestJobStore, SudOuestJobActionTypes } from './sudOuestJob'
import { store as welcomeToTheJungle, State as WelcomeToTheJungleState, WelcomeToTheJungleStore, WelcomeToTheJungleActionTypes } from './welcomeToTheJungle'


export type RootState = {
  documents: DocumentsState,
  brawlstars: BrawlstarsState,
  linkedIn: LinkedInState,
  indeed: IndeedState,
  sudOuestJob: SudOuestJobState,
  welcomeToTheJungle: WelcomeToTheJungleState
}

export type Store = DocumentsStore<Pick<RootState, 'documents'>>
 & BrawlstarsStore<Pick<RootState, 'brawlstars'>>
 & LinkedInStore<Pick<RootState, 'linkedIn'>>
 & IndeedStore<Pick<RootState, 'indeed'>>
 & SudOuestJobStore<Pick<RootState, 'sudOuestJob'>>
 & WelcomeToTheJungleStore<Pick<RootState, 'welcomeToTheJungle'>>

export const store = createStore({
  modules: {
    brawlstars,
    documents,
    linkedIn,
    indeed,
    sudOuestJob,
    welcomeToTheJungle
  }
})

export const ActionsTypes = {
  BrawlstarsActionTypes,
  DocumentsActionTypes,
  IndeedInActionTypes,
  LinkedInActionTypes,
  SudOuestJobActionTypes,
  WelcomeToTheJungleActionTypes
}

export default {
  store
}
