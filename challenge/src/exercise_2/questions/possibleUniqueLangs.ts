import { countries } from "../countries"

export const getPossibleUniqueLangs = (): string[] => {
    const possibleUniqueLangs: string[] = []

    countries.map(country => {
        country.languages.map(lang => {
            if (!possibleUniqueLangs.includes(lang)) {
                possibleUniqueLangs.push(lang)
            }
        })
    })

    return possibleUniqueLangs

}