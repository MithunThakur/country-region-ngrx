export interface RegionDetails {
    name: string,
    capital: string,
    population: number,
    currencies: string[],
    flag: any
}

export interface CountryRegionState {
    country: string,
    region: string[],
    countryDetails: RegionDetails
}

export const initialState: CountryRegionState = {
    country: '',
    region: ['europe', 'asia'],
    countryDetails: {
        name: '',
        capital: '',
        population: 0,
        currencies: [],
        flag: null
    }
}