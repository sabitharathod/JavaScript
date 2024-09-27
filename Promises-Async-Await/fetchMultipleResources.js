//Create a function to fetch multiple resources sequentially and 
//then combines the results. with file name 


// Function to fetch multiple resources sequentially and combine results
async function fetchMultipleResources() {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments',
        'https://jsonplaceholder.typicode.com/albums'
    ];

    const results = [];

    try {
        for (const url of urls) {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            results.push(data);
        }

        // Combine results into a single object
        const combinedResults = {
            posts: results[0],
            comments: results[1],
            albums: results[2]
        };

        console.log('Combined results:', combinedResults);
    } catch (error) {
        console.error('Error fetching resources:', error);
    }
}

// Call the function
fetchMultipleResources();
