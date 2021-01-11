import { ActionContext, ActionTree } from 'vuex'

import { indeedServices } from '../../services/indeed.service'
import { RootState } from '../../store'
import { IndeedInActionTypes } from './action-types'
import { Mutations } from './mutations'
import { State } from './state'

type AugmentedActionContext = {
  commit <K extends keyof Mutations> (key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [IndeedInActionTypes.GET_JOBS]({}: AugmentedActionContext): unknown
}

export const actions: ActionTree<State, RootState> & Actions = {
  [IndeedInActionTypes.GET_JOBS] (_) {
    return indeedServices.getListOfJobToulouseDevWeb()
  }
}
