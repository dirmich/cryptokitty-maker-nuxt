export const state = ()=> ({
  gene: {}
})
import { Genes } from '../utils/genes'

export const getters={
  gene(state) {
    return state.gene
  }
}
export const actions = {
  loadGene({commit}) {
    Genes().then(res=>{
      commit('setItem', res)
    })
  }
}

export const mutations={
  setItem(state, payload) {
    state.gene = payload
  }
}