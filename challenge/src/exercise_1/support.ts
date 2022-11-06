export const generateStandardArray = () => Array.from(Array(100), (_, x) => x + 1)

export const transformArray = (array: number[]): string[] => array.map(n => {
    if (isDivBy(n, [3, 5])) {
        return 'Visual Nuts'
    }

    if (isDivBy(n, [3])) {
        return 'Visual'
    }

    if (isDivBy(n, [5])) {
        return 'Nuts'
    }
   
    return n.toString()
})

export const isDivBy = (index: number, divisors: number[]): boolean => {
    return divisors.reduce((prev, divisor) => index % divisor == 0 && prev, true)
}



