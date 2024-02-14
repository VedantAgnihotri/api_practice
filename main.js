const image = document.getElementById('sprite');
const loader = document.getElementById('loader');

async function fetchData() {
    try {
        const pokemonName = document.getElementById('Pname').value.toLowerCase();
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
        loader.style.display = "block"; 
        if (!response.ok) {
            throw new Error("Couldn't fetch");
        }
        const data = await response.json();
        
        const sprite = data.sprites.front_default;

        loader.style.display = "none";

        image.src = sprite;
        image.style.display = "block";

    } catch (error) {
        loader.style.display = "block"; 
        console.error(error);
        image.alt = "invalid";
        image.src = "";
        
    }
}