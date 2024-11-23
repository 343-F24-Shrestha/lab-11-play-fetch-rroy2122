const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // Define the API endpoint
    const apiUrl = "https://reqres.in/api/users?page=1";

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);

        // Check if the response is successful
        if (response.ok) {
            const data = await response.json(); // Parse the response as JSON

            // Get the user-list container
            const userList = document.getElementById("user-list");

            // Iterate through the users and create elements for each
            data.data.forEach(user => {
                // Create a new <div> for the user
                const userDiv = document.createElement("div");
                userDiv.classList.add("user");

                // Add the user's profile image
                const img = document.createElement("img");
                img.src = user.avatar;
                img.alt = `${user.first_name} ${user.last_name}'s profile picture`;

                // Add the user's name
                const name = document.createElement("p");
                name.textContent = `${user.first_name} ${user.last_name}`;

                // Append the image and name to the userDiv
                userDiv.appendChild(img);
                userDiv.appendChild(name);

                // Append the userDiv to the user-list container
                userList.appendChild(userDiv);
            });
        } else {
            console.error(`Failed to fetch users: ${response.status}`);
        }
    } catch (error) {
        console.error("Error occurred while fetching users:", error);
    }
});
