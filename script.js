// Global Update
var globalUrl = "https://coronavirus-19-api.herokuapp.com/all"

fetch(globalUrl)
    .then((res) => res.json())
    .then((res) => {
        let confirmed = res.cases
        let deaths = res.deaths
        let recovered = res.recovered
        document.getElementById('TotalConfirmed').innerHTML = confirmed;
        document.getElementById('TotalDeaths').innerHTML = deaths;
        document.getElementById('TotalRecovered').innerHTML = recovered;
    })

// Update with countries
let searchbtn = document.getElementById('search');
searchbtn.addEventListener('click', searchFunction);

function searchFunction() {
    let countryName = document.getElementById('countryName').value
    if (countryName !== "") {
        console.log(countryName)
        var countryUrl = `https://coronavirus-19-api.herokuapp.com/countries/${countryName}`;


        fetch(countryUrl)
            .then((res) => res.json())
            .then((res) => {
                let confirmedCountry = res.cases
                let deathsCountry = res.deaths
                let recoveredCountry = res.recovered
                document.getElementById('confirmedCountry').innerHTML = confirmedCountry;
                document.getElementById('deathsCountry').innerHTML = deathsCountry;
                document.getElementById('recoveredCountry').innerHTML = recoveredCountry;

            })

        document.getElementById('searchCountryRows').style.display = "block"
    }

}

// Vaccination Status
let country = document.getElementById('country');
country.addEventListener('change', getSelectedValue);

function getSelectedValue() {
    let country = document.getElementById('country').value
    let vaccineUrl = `https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`

    fetch(vaccineUrl)
        .then((res) => res.json())
        .then((res) => {
            let population = res.All.population
            let registered = res.All.administered
            let vaccinated = res.All.people_vaccinated
            document.getElementById('population').innerHTML = population
            document.getElementById('registered').innerHTML = registered
            document.getElementById('vaccinated').innerHTML = vaccinated
        })

    document.getElementById('vaccineStatusRows').style.display = "block"
}