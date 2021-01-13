import { ActionContext, ActionTree } from 'vuex'

import { sudOuestJobServices } from '../../services'
import { RootState } from '../../store'
import { SudOuestJobActionTypes } from './action-types'
import { Mutations } from './mutations'
import { State } from './state'

type AugmentedActionContext = {
  commit <K extends keyof Mutations> (key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [SudOuestJobActionTypes.GET_JOBS]({}: AugmentedActionContext): Promise<string>
}

export const actions: ActionTree<State, RootState> & Actions = {
  [SudOuestJobActionTypes.GET_JOBS] (_) {
    return sudOuestJobServices.getListOfJobToulouseDevWeb()
  }
}
