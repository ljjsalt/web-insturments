import { createStore } from 'vuex'

export default createStore({
  state: {
    bindings: {
      81: "C5", // Q
      87: "D5", // W
      69: "E5", // E
      82: "F5", // R
      85: "G5", // R
      73: "A5", // R
      79: "B5", // R

      65: "C4", // A
      83: "D4", // S
      68: "E4", // D
      70: "F4", // F
      74: "G4", // J
      75: "A4", // K
      76: "B4", // L

      90: "C3", // Z
      88: "D3", // X
      67: "E3", // C
      86: "F3", // V
      77: "G3", // M
      188: "A3", // <
      190: "B3", // >

      72: "C6", // H

    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
