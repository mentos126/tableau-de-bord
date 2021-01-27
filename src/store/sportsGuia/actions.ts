import { ActionContext, ActionTree } from 'vuex'
import { SportsGuiaActionTypes } from './action-types'
import { Mutations } from './mutations'
import { SportsGuiaMutationTypes } from './mutations-types'
import { State } from './state'
import { RootState } from '../../store'

import { sportsGuiaServices } from '../../services'

type AugmentedActionContext = {
  commit <K extends keyof Mutations> (key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [SportsGuiaActionTypes.GET_CHANNEL_GUIA]({}: AugmentedActionContext, sportChannel: string): Promise<string>
}

export const actions: ActionTree<State, RootState> & Actions = {
  [SportsGuiaActionTypes.GET_CHANNEL_GUIA] (_, sportChannel) {
    return sportsGuiaServices.getChannelGuia(sportChannel)
  }
}
