export interface CountryList {
    name: string
}


export interface RegionDetails {
    name: string,
    capital: string,
    population: number,
    currencies: string[],
    flag: any
}

export interface CountryRegionState {
    countryList: CountryList[],
    isCountrySelected: boolean,
    region: string[],
    selectedRegion: string,
    selectedCountry: string,
    selectedCountryDetails: RegionDetails,
    countryDetails: RegionDetails[]
}

export const initialState: CountryRegionState = {
    countryList: [],
    isCountrySelected: false,
    region: ['europe', 'asia'],
    selectedRegion: '',
    selectedCountry: '',
    selectedCountryDetails: {
        name: '',
        capital: '',
        population: 0,
        currencies: [],
        flag: null
    },
    countryDetails: [{
        name: '',
        capital: '',
        population: 0,
        currencies: [],
        flag: null
    }]
}