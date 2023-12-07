export async function getCountries() {
    // throw new Error('testing')
    let response = await fetch('https://restcountries.com/v3.1/all')
    let data = await response.json();

    return data;
}