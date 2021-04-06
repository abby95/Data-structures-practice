var hashFunction = require("./hashFunction")

class HashTable {
    constructor(HashTableSize) {
        this.hashTable = new Array(HashTableSize);
        this.HashTableSize = HashTableSize
    }


    insert(key, data) {

        let BucketIndex = hashFunction(key, this.HashTableSize)


        if (!this.hashTable[BucketIndex]) {
            this.hashTable[BucketIndex] = [[key, data]]
        } else {
            this.hashTable[BucketIndex].push([key, data])
        }

    }

    find(key) {
        let BucketIndex = hashFunction(key, this.HashTableSize)

        let found = false

        if (this.hashTable[BucketIndex]) {
            this.hashTable[BucketIndex].forEach(bucket => {
                if (bucket[0] === key) {
                    found = true

                } else {
                    found = false
                }
            })


        }

        return found


    }

    remove(key) {
        let BucketIndex = hashFunction(key, this.HashTableSize);

        // if (this.hashTable[BucketIndex]) {
        if (this.find(key)) {


            this.hashTable[BucketIndex] = this.hashTable[BucketIndex].filter(bucket => bucket[0] !== key)
        } else {
            console.log("Key Not Found!!!")
        }


    }

}

let HT = new HashTable(7)

HT.insert("Abhishek", 25)
HT.insert("Ankita", 25)
HT.insert("Barun", 30)
HT.insert("Pathik", 26)
HT.insert("Aadya", 29)
HT.insert("Vijay", 39)
HT.insert("Shibani", 62)
// console.log(JSON.stringify(HT))

console.log(HT.find("Pathik"))
HT.remove("Pathik")

console.log(JSON.stringify(HT.hashTable))