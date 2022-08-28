
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
const displayCountry = countries => {
    // for (const country of countries) {
    //     console.log(country)

    // }
    const countriesContainer = document.getElementById('countries-container')
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country)
        countryDiv.innerHTML = `
<h3>Name: ${country.name.common}</h3>
<p> Capital: ${country.capital ? country.capital[0] : 'No Capital'} </p>
`;
        countriesContainer.appendChild(countryDiv)

    });
}

loadCountries();
