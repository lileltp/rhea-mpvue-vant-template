export default {
  set_disc (state, v) {
    console.info(v)
    state.test = v
  },
  increment (state) {
    console.info('aaaaaaa')
    state.count++
  },
  decrement (state) {
    state.count--
  }
}
