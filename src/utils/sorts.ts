import { walkPropsPath } from "./common"

export const accendBy = (path) => (a, b) => {
    const realA = walkPropsPath(a, path)
    const realB = walkPropsPath(b, path)
    if (realA > realB) return 1
    if (realA < realB) return -1
    return 0
}

export const decendBy = (path) => (a, b) => {
    console.log('decendBy', path)
    const realA = walkPropsPath(a, path)
    const realB = walkPropsPath(b, path)
    if (realA < realB) return 1
    if (realA > realB) return -1
    return 0
}