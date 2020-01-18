module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString ? arrayAsString.split(',').map(values => values.trim()) : []
}