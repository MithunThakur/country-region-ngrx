# Description - The Project Country Region used NGRX state management.
#               In this application country-region module is ceated which has below components
#               > country-region.component (acting as parent component)
#               > country-region-selection (to select Region and Country value from drop down)
#               > country-region-details.component (to showcase Country details in table)
#               Shared module is created which has below component for reuseability purpose
#               > drop-down.component (this is acting as common component which is created under shared module)
#               country-region service which makes call to GET api
#               state folder consist of below files
#               > country-region.state (which holds initial state)
#               > country-region.actions (countrySelection, filterCountryDetails, regionSelection, countryDetailsFetchSuccess)
#               > country-region-reducer on(countrySelection, filterCountryDetails, regionSelection, countryDetailsFetchSuccess)
#               > country-region.effects (regionSelection$)
#               > couuntry-region-selectors (getCountry, getRegion, getCountryDetails, getCountryIsSelected, getSelectedCountryDetails)



# Installation - run - > npm install in command prompt
#                         ng serve (assuming angular in installed)