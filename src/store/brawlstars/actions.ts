import { ActionContext, ActionTree } from 'vuex'
import { BrawlstarsActionTypes } from './action-types'
import { Mutations } from './mutations'
import { BrawlersMutationTypes } from './mutations-types'
import { State } from './state'
import { RootState } from '../../store'

import { brawlstarsServices } from '../../services'

type AugmentedActionContext = {
  commit <K extends keyof Mutations> (key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [BrawlstarsActionTypes.GET_BRAWLSTARS_PROFILE]({}: AugmentedActionContext, profileId: string): Promise<string>
}

export const actions: ActionTree<State, RootState> & Actions = {
  [BrawlstarsActionTypes.GET_BRAWLSTARS_PROFILE] (_, profileId) {
    return brawlstarsServices.getOneProfile(profileId)
  }
}
