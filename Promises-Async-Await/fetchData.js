//Create a function that fetches data from a public API 
//(eg: JSONPlaceholder) using both Promises and async/await syntax. 
//Handle errors Properly. using promise asyn wait  with file name




// Function to fetch data using Promises
function fetchDataWithPromises() {
    const url = 'https://randomuser.me/api';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched using Promises:', data);
        })
        .catch(error => {
            console.error('Error fetching data with Promises:', error);
        });
}

// Function to fetch data using async/await
async function fetchDataWithAsyncAwait() {
    const url = 'https://randomuser.me/api';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched using async/await:', data);
    } catch (error) {
        console.error('Error fetching data with async/await:', error);
    }
}

// Call both functions
fetchDataWithPromises(); // Fetch using Promises
fetchDataWithAsyncAwait(); // Fetch using async/await
