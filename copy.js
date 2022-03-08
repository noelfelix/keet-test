const assert = require("assert");
const { Copier, error } = require("./Copier");
const open = require("open");

const defaultCopier = new Copier();
const string = "Hello";
const stringCopier = new Copier(string);
const arr = [1, 2, 3];
const arrCopier = new Copier(arr);
const obj = { a: { b: { c: { d: [1, "two", { e: function f() {} }] } } } };
const objCopier = new Copier(obj);

(async () => {
  assert((await defaultCopier.get()) === undefined);

  assert((await stringCopier.get()) === string);
  assert((await arrCopier.get()) === arr);
  assert((await objCopier.get()) === obj);

  assert(stringCopier.copy() === string);
  assert(arrCopier.copy() !== arr);
  assert(objCopier.copy() !== obj);

  assert(JSON.stringify(objCopier.copy()) === JSON.stringify(obj));
  try {
    await defaultCopier.delete();
  } catch (e) {
    assert(e === error);
  }

  open("https://getyarn.io/yarn-clip/97ac66c9-beb5-4489-b116-02120a8be4e6/gif");
})();
