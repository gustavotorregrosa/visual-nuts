//exercicse 2
//we could reduce the number of loops and iterations but I decided to do so for readability

(() => {

    const countries = [{
        country: "US",
        languages: ["en"]
    },
    {
        country: "BE", languages: ["nl", "fr", "de"]
    }, {
        country: "NL",
        languages: ["nl"]
    },
    {
        country: "DE", languages: ["de"]
    }, {
        country: "ES",
        languages: ["es"]
    }
    ]

    //number of countries in the world
    let numberOfCountries = countries.length
    console.log({ numberOfCountries })


    let countryWithMostOfficialLangsThatSpeaksGerman = {}
    let possibleUniqueLangs = []
    let uniqueLangsUsedInCountries = {}
    let countryWithMostOfficialLangs = {}

    const occurienciesOfLangInArray = (countriesArray, lang) => {
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

    countries.map(country => {
        // finds the country with the most official languages,where they officially speak German
        if (country.languages.includes('de')) {
            if (!countryWithMostOfficialLangsThatSpeaksGerman.country) {

                //using imutability principle
                countryWithMostOfficialLangsThatSpeaksGerman = {
                    ...country
                }
            }

            if (countryWithMostOfficialLangsThatSpeaksGerman.languages.length < country.languages.length) {
                countryWithMostOfficialLangsThatSpeaksGerman = {
                    ...country
                }
            }

        }

        // that counts all the official languages spokenin the listed countries.
        country.languages.map(lang => {
            if (!possibleUniqueLangs.includes(lang)) {
                possibleUniqueLangs = [
                    ...possibleUniqueLangs,
                    lang
                ]
            }
        })


        // to find the country with the highest number of official languages
        if (!countryWithMostOfficialLangs.country) {
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

    
    // to find the most common official language(s), of all countries.
    let countriesWithLanguageSpokenTheMost = 0
    possibleUniqueLangs.map(lang => {
        const countriesThatSpeakThatLang =  occurienciesOfLangInArray(countries, lang)
        if(countriesWithLanguageSpokenTheMost < countriesThatSpeakThatLang){
            countriesWithLanguageSpokenTheMost = countriesThatSpeakThatLang
        }
    })

    const languageSpokenTheMost = []
    possibleUniqueLangs.map(lang => {
        if(occurienciesOfLangInArray(countries, lang) == countriesWithLanguageSpokenTheMost){
            languageSpokenTheMost.push(lang)
        }
    })

    console.log({ countryWithMostOfficialLangsThatSpeaksGerman })
    console.log({ possibleUniqueLangs })
    console.log({ countryWithMostOfficialLangs })
    console.log({languageSpokenTheMost})

})()