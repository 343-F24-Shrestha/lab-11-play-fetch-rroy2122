const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');



document.getElementById('api-1-btn').addEventListener('click', async () => {
    // Make a request to your first API here. Put the response's data in output-1.
    // If your response has no body, put the status code in output-1.

    // TODO


   const SPOTIFY_TOKEN = 'BQDIhxV6NZzaz3VTtwev-2Ef6sGGFTEQSmOB6Plmmla6YDqBEB6vcoFCrySm1FZg3ePuBo0vEjRtU1y4SkCu12wYvMUPSYICaLXxE15XW-geCg1yjPwmOJq9C9-heQpEnMkV7oAyLkZVEfAWfzfsUeaPGB5Gs7hoNix34o8RrEFBt_aXZ84LDCAr6DOAAta5j2MsCkD_BPcpzvG--sp8j-r_bn8eWfBUrSi_2EQwJj9eVQM8l13I_pnHjYsZXFkJ4wrEGTEuAl9Qo5Uj'; // Replace this with a valid token
   const SPOTIFY_URL = 'https://api.spotify.com/v1/browse/categories';

   try {
       // Fetch data from Spotify API
       const response = await fetch(SPOTIFY_URL, {
           method: 'GET',
           headers: {
               'Authorization': `Bearer ${SPOTIFY_TOKEN}`
           }
       });

       // Check if response is successful
       if (response.ok) {
           const data = await response.json();
           // Display data in output-1
           document.getElementById('output-1').textContent = JSON.stringify(data, null, 2);
       } else {
           document.getElementById('output-1').textContent = `Error: ${response.status}`;
       }
   } catch (error) {
       document.getElementById('output-1').textContent = `Error: ${error.message}`;
   }
});

document.getElementById('api-2-btn').addEventListener('click', async () => {
    // Make a request to your second API here. Put the response's data in output-2.
    // If your response has no body, put the status code in output-2.
    
    // TODO
    const GIPHY_API_KEY = '2YccsPT9LvZooHKXpFeJF4MvKq1PEmQI'; 
    const GIPHY_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;

    try {
        // Fetch data from Giphy API
        const response = await fetch(GIPHY_URL);

        // Check if response is successful
        if (response.ok) {
            const data = await response.json();
            // Display data in output-2
            document.getElementById('output-2').textContent = JSON.stringify(data, null, 2);
        } else {
            document.getElementById('output-2').textContent = `Error: ${response.status}`;
        }
    } catch (error) {
        document.getElementById('output-2').textContent = `Error: ${error.message}`;
    }
});
