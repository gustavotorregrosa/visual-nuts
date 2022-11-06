import { countries } from "../countries"
import { ICountry } from "../ICountries"
import { getPossibleUniqueLangs } from "./possibleUniqueLangs"

export const getLanguageSpokenTheMost = (): string[] => {

    const occurienciesOfLangInArray = (countriesArray: ICountry[], lang: string) => {
        let count = 0
        countriesArray.map(country => {
            country.languages.map(_lang => {
                if (_lang == lang) {
                    count++
                }
            })
        })

        return count

    }
    
    let countriesWithLanguageSpokenTheMost = 0

    getPossibleUniqueLangs().map(lang => {
        const countriesThatSpeakThatLang =  occurienciesOfLangInArray(countries, lang)
        if(countriesWithLanguageSpokenTheMost < countriesThatSpeakThatLang){
            countriesWithLanguageSpokenTheMost = countriesThatSpeakThatLang
        }
    })

    const languageSpokenTheMost: string[] = []
    getPossibleUniqueLangs().map(lang => {
        if(occurienciesOfLangInArray(countries, lang) == countriesWithLanguageSpokenTheMost){
            languageSpokenTheMost.push(lang)
        }
    })

    return languageSpokenTheMost
}