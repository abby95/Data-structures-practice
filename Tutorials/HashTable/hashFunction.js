function hashFunction(keyString, HashTableSize) {
    let hash = 17;
    for (let i = 0; i < keyString.length; i++) {
        hash += keyString.charCodeAt(i) * 13
    }
    return hash % HashTableSize
}

// hashFunction("Abhishek", 2)

module.exports = hashFunction