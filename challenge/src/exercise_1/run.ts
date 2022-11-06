import { generateStandardArray, transformArray } from "./support"

const standartArray = generateStandardArray()
const transformedArray = transformArray(standartArray)

transformedArray.map(n => console.log(n))




