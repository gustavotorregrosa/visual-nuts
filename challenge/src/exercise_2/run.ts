import { countryThatSpeakingSpecificLangWithMostOfficialLangs } from "./questions/countrySpeakingDefinedLangWithMostLangs"
import { getCountryWithMoreLangs } from "./questions/countryWithMoreLangs"
import { getLanguageSpokenTheMost } from "./questions/languageSpokenTheMost"
import { numberOfCountries } from "./questions/numberOfCountries"
import { getPossibleUniqueLangs } from "./questions/possibleUniqueLangs"

console.log('number of countries: ', numberOfCountries())

console.log('country with the most official languages, where they officially speak German', countryThatSpeakingSpecificLangWithMostOfficialLangs('de'))

console.log('all languages listed', getPossibleUniqueLangs())

console.log('country with the highest number of officiallanguages', getCountryWithMoreLangs())

console.log('the most common official language(s), of all countries', getLanguageSpokenTheMost())