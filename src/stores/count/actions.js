const actions = {
  increment() {
    this.counter += 1;
  },
  decrement() {
    this.counter -= 1;
    if (this.counter < 0) {
      this.counter += 1;
    }
  },
};

export default actions;
