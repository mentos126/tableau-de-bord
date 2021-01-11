import { ActionContext, ActionTree } from 'vuex'
import { LinkedInActionTypes } from './action-types'
import { Mutations } from './mutations'
import { State } from './state'
import { RootState } from '../../store'

import { linkedInServices } from '../../services/linkedIn.service'

type AugmentedActionContext = {
  commit <K extends keyof Mutations> (key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [LinkedInActionTypes.GET_JOBS]({}: AugmentedActionContext): unknown
}

export const actions: ActionTree<State, RootState> & Actions = {
  [LinkedInActionTypes.GET_JOBS] (_) {
    return linkedInServices.getListOfJobToulouseDevWeb()
  }
}
