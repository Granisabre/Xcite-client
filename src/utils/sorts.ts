import { walkPropsPath } from "./common"

export const accendBy = (path: string) => (a: any, b: any) => {
    const realA = walkPropsPath(a, path)
    const realB = walkPropsPath(b, path)
    if (realA > realB) return 1
    if (realA < realB) return -1
    return 0
}

export const decendBy = (path: string) => (a: any, b: any) => {
    const realA = walkPropsPath(a, path)
    const realB = walkPropsPath(b, path)
    if (realA < realB) return 1
    if (realA > realB) return -1
    return 0
}