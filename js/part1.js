const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**
    // TODO 

    // Gets values from the button 
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    // Stores name + age in params
    let params = new URLSearchParams({ name, age });

    // Converts into a string
    let resp = await fetch("https://echo.zuplo.io/api?" + params.toString());

    console.log(resp);

    // Converts into JSON
    let data = await resp.json();
    output.textContent = JSON.stringify(data, null, 2);
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**

    // TODO
   // Get values from the input fields
   let name = document.getElementById("name").value;
   let age = document.getElementById("age").value;

   // Options for the POST request
   let options = {
       method: "POST",
       headers: {
           "Content-Type": "application/json", // Specify the content type as JSON
       },
       body: JSON.stringify({ name, age }), // Convert the data to JSON string
   };

   let resp = await fetch("https://echo.zuplo.io/api", options);
   let data = await resp.json();
   output.textContent = JSON.stringify(data, null, 2);
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**

    // TODO
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams( {name, age} ),
    };
    let resp = await fetch("https://echo.zuplo.io/api", options);

    let data = await resp.json();
    output.textContent = JSON.stringify(data, null, 2);


    
});
