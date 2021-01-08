import { MutationTree } from 'vuex'
import { BrawlersMutationTypes } from './mutations-types'
import { State } from './state'

export type Mutations<S = State> = {
  [BrawlersMutationTypes.SET_COUNTER](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [BrawlersMutationTypes.SET_COUNTER](state, payload: number) {
    state.counter = payload
  },
}
