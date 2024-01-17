// Function to make a GET request
function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

// Function to display a list of animal names
function displayAnimalNames(characters) {
    const animalList = document.getElementById('animalList');
    animalList.innerHTML = '<h2>Animal Names</h2>';
    
    characters.forEach(character => {
        const nameElement = document.createElement('p');
        nameElement.textContent = character.name;
        nameElement.addEventListener('click', () => showAnimalDetails(character));
        animalList.appendChild(nameElement);
    });
}

// Function to display details of a selected animal
function showAnimalDetails(character) {
    const animalDetails = document.getElementById('animalDetails');
    animalDetails.innerHTML = '<h2>Animal Details</h2>';

    const imageElement = document.createElement('img');
    imageElement.src = character.image;
    imageElement.alt = character.name;

    const votesElement = document.createElement('p');
    votesElement.textContent = `Votes: ${character.votes}`;

    const voteButton = document.createElement('button');
    voteButton.textContent = 'Vote';
    voteButton.addEventListener('click', () => voteForAnimal(character));

    animalDetails.appendChild(imageElement);
    animalDetails.appendChild(votesElement);
    animalDetails.appendChild(voteButton);
}

// Function to handle voting for an animal
function voteForAnimal(character) {
    character.votes += 1;
    showAnimalDetails(character);
}

// Initial load: Fetch data and display animal names
const apiUrl = ' http://localhost:3000/characters';  
fetchData(apiUrl, displayAnimalNames);