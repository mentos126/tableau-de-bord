import { GetterTree } from 'vuex'
import { RootState } from '../../store'
import { State } from './state'

export type Getters = {
  doubledCounter(state: State): number
}

export const getters: GetterTree<State, RootState> & Getters = {
  doubledCounter: (state) => {
    return state.counter * 2
  },
}
