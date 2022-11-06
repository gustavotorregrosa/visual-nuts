import { countries } from "../countries"
import { ICountry } from "../ICountries"

export const countryThatSpeakingSpecificLangWithMostOfficialLangs = (lang: string): ICountry => {
    let countryWithMostOfficialLangsThatSpeaksSpecificLang: ICountry | null = null

    countries.map(country => {
        if(country.languages.includes(lang)){
            if(!countryWithMostOfficialLangsThatSpeaksSpecificLang){
                 //using imutability principle
                 countryWithMostOfficialLangsThatSpeaksSpecificLang = {
                    ...country
                } as ICountry
            }

            if (countryWithMostOfficialLangsThatSpeaksSpecificLang!.languages.length < country.languages.length) {
                countryWithMostOfficialLangsThatSpeaksSpecificLang = {
                    ...country
                }
            }
        }
    })

    return countryWithMostOfficialLangsThatSpeaksSpecificLang!

}





