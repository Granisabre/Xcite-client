/**
 * Waltk down nested properties on the given 'item' to get a value
 * @param {Object} item an object to walk properties through 
 * @param {String} path a string notation of the path to walk example prop.prop1.prop2
 * @returns the value at the items[path]
 */
export const walkPropsPath = (item, path) => {
    const remaining = path ? path.split('.') : []
    if (!remaining[0] || !item) return item // no path remaining or item is undefined, return current value

    const next = remaining.shift()
    return walkPropsPath(item[next], remaining.join('.'))
}