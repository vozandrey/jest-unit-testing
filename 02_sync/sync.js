class Lodash {
    compact(array) {
        return array.filter(val => !!val);
    }
}

module.exports = Lodash;