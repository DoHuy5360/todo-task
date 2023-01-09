const i = { a: 1 };
const e = {};
const o = undefined;
const p = null || {};

const { a, b = null } = i;

console.log(a);
console.log(b);
