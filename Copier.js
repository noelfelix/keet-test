module.exports = class Copier {
  constructor(arg = undefined) {
    this.argument = arg;
  }

  get = () => new Promise((res) => setTimeout(() => res(this.argument), 1000));

  delete() {
    return new Promise(() =>
      setTimeout(() => {
        throw new Error("Cannot delete!");
      }, 2000)
    );
  }

  copy = () => {
    const { argument } = this;
    if (typeof argument === "object") {
      return Array.isArray(argument) ? [...argument] : { ...argument };
    }
    return argument;
  };
};
