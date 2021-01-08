import { GetterTree } from 'vuex'
import { RootState } from '../../store'
import { UserDocuments } from '../../@types'
import { State } from './state'

export type Getters = {
  getDocuments(state: State): UserDocuments | null
}

export const getters: GetterTree<State, RootState> & Getters = {
  getDocuments: (state) => state.data,
}
