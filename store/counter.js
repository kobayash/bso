export const state = () => ({
  ball: 0,
  strike: 0,
  out: 0
})

export const mutations = {
  increment (state, property) {
    console.log(state[property]);
  },
  ball(state) {
    if (state.ball > 2) {
      if (true) {
        // 自動リセット
        this.commit('counter/next');
      }
    } else {
      state.ball++;
    }
  },
  strike(state) {
    if (state.strike > 1) {
      if (true) {
        // 自動リセット
        this.commit('counter/out');
      }
    } else {
      state.strike++;
    }
  },
  out(state) {
    if (state.out > 1) {
      if (true) {
        // 自動リセット
        this.commit('counter/next', true);
      }
    } else {
      state.out++;
      this.commit('counter/next', false);
    }
  },
  next(state, change) {
    state.ball = 0;
    state.strike = 0;
    if(change) {
      state.out = 0;
    }
  }
  // remove (state, { todo }) {
  //   state.list.splice(state.list.indexOf(todo), 1)
  // },
  // toggle (state, todo) {
  //   todo.done = !todo.done
  // }
}
