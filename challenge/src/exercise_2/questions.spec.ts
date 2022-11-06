import { getCountryWithMoreLangs } from "./questions/countryWithMoreLangs"
import { getLanguageSpokenTheMost } from "./questions/languageSpokenTheMost"
import { numberOfCountries } from "./questions/numberOfCountries"
import { getPossibleUniqueLangs } from "./questions/possibleUniqueLangs"

describe('countries questions', () => {
    it('number of countries', () => {
        expect(numberOfCountries()).toBe(5)
    })

    it('all languages to be', () => {
        const allLangs: string[] = getPossibleUniqueLangs()
        expect(allLangs.length).toBe(5)
        expect(allLangs).toContain('en')
        expect(allLangs).toContain('nl')
        expect(allLangs).toContain('fr')
        expect(allLangs).toContain('de')
        expect(allLangs).toContain('es')

    })

    it('country with the highest number of official languages', () => {
        const {country} = getCountryWithMoreLangs()
        expect(country).toBe('BE')
    })

    it('country with the most official languages, where they officially speak German', () => {
        const {languages: langsForOneCountry} = getCountryWithMoreLangs()
        const {languages: langsForOneCountryThatSpeaksGerman} = getCountryWithMoreLangs()
        expect(langsForOneCountryThatSpeaksGerman).toContain('de')
        expect(langsForOneCountry.length).toBeGreaterThanOrEqual(langsForOneCountryThatSpeaksGerman.length)
    

    })

    it('to find the most common official language(s), of all countries', () => {
        expect(getLanguageSpokenTheMost()).toContain('nl')
        expect(getLanguageSpokenTheMost()).toContain('de')
        expect(getLanguageSpokenTheMost().length).toBe(2)
    })

    
})