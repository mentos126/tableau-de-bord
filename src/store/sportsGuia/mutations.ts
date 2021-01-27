import { MutationTree } from 'vuex'
import { SportsGuiaMutationTypes } from './mutations-types'
import { State } from './state'

export type Mutations<S = State> = {}

export const mutations: MutationTree<State> & Mutations = {}
