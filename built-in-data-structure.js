/**
 * 1. ARRAY
 */
const arr = [1, 2, 3, "Thanh Dat"];

// add
arr.push(4);
arr.unshift(0);
// remove
arr.pop();
arr.shift();

for (const item of arr) {
  //   console.log(item)
}
// map, filter, forEach, reduce, concat, slice, splice

// -----------------------------------------------------

/**
 * 2. OBJECT
 */

const obj = {
  name: "Thanh Dat",
  age: 36,
  "key-tree": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "football";
delete obj.hobby;

// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["key-tree"]);
// console.log(obj);
// obj.sayMyName();

// Object.keys / .values /.entries

// -----------------------------------------------------

/**
 * 3. SET
 */
const set = new Set([1, 2, 3]);
set.add("Thanh Dat");
set.add("Thanh Dat"); // ignore for duplicate value
set.delete(2);
// console.log("has method", set.has(1));
// console.log("size attribute", set.size);

set.clear(); // remove all item

for (const item of set) {
  //   console.log("loop", item);
}

// -----------------------------------------------------

/**
 * 4. MAP
 */
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3);
map.set("d", 4);
map.delete("c");

// console.log("has method", map.has("b"));
// console.log("size attribute", map.size);

map.clear();

for (const [key, value] of map) {
  //   console.log(`${key}: ${value}`);
}
