class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);

    // this.table[index] = value; // key has same chars --> lost data

    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    } else {
      this.table[index] = [[key, value]];
    }
  }

  get(key) {
    const index = this.hash(key);

    // return this.table[index];

    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;

    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("vi", "Viet nam");
table.set("en", "England");
table.set("us", "USA");
table.set("iv", "Dong Lao");
table.set("name", "Dat");
table.display();
table.set("name", "09");
console.log(table.get("name"));
table.display();
table.remove("name");
table.display();
console.log(table.get("us"));
