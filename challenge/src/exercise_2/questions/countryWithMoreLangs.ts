import { countries } from "../countries"
import { ICountry } from "../ICountries"


export const getCountryWithMoreLangs = (): ICountry => {
    let countryWithMostOfficialLangs: ICountry | null = null

    countries.map(country => {
        if (!countryWithMostOfficialLangs) {
            countryWithMostOfficialLangs = {
                ...country
            }
        }

        if (countryWithMostOfficialLangs.languages.length < country.languages.length) {
            countryWithMostOfficialLangs = {
                ...country
            }
        }
    })

    return countryWithMostOfficialLangs! as ICountry

}