
export async function fetchCars() {
    const headers = {
        // Your Rapid API
            'X-RapidAPI-Key': 'bae7133c67msh38e47404250016ep128c6ejsn06f60d0caa0f',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}