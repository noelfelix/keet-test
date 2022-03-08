module.exports.error = new Error("Cannot delete!");

module.exports.Copier = class Copier {
  constructor(arg = undefined) {
    this.argument = arg;
  }

  get = () => new Promise((res) => setTimeout(() => res(this.argument), 1000));

  delete() {
    return new Promise((_, rej) =>
      setTimeout(() => {
        rej(module.exports.error);
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
