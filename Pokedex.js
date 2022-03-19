const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
const pokemon = document.getElementById('pokeName');
const buttonSearch = document.getElementById('Buscar');
const buttonDelete = document.getElementById('Borrar');
const appNode = document.getElementById('app');

buttonSearch.addEventListener('click', insertPokemon);
buttonDelete.addEventListener('click', deletePokemons);

async function insertPokemon() {
    try {
      const res = await fetch(`${baseUrl}${pokemon.value.toLocaleLowerCase()}`)
      const pokemonDataJSON = await res.json()
  
      const allItems = [];
      const result = [];
  
      for (let pokemonInfo in pokemonDataJSON) { 
        result.push([pokemonInfo , pokemonDataJSON[pokemonInfo]]);
      }
  
      console.table(result);
 
      const pokemonImage = document.createElement('img');
      pokemonImage.src = result[14][1].front_default;   
      
      const pokemonName = document.createElement('h2');
      pokemonName.innerText = `Nombre: ${result[10][1]} - ID: ${result[6][1]}`;  
      
      const pokemonType = document.createElement('h2');
      pokemonType.innerText = `Tipo: ${result[16][1][0].type.name}`;   
     
      const hp = document.createElement('p');
      hp.innerText = `HP: ${result[15][1][0].base_stat}`; 
      hp.classList.add('pokemonStats');

      const attack = document.createElement('p');
      attack.innerText = `Ataque: ${result[15][1][1].base_stat}`; 
      attack.classList.add('pokemonStats');
  
      const defense = document.createElement('p');
      defense.innerText = `Defensa: ${result[15][1][2].base_stat}`; 
      defense.classList.add('pokemonStats');
  
      const specialAttack = document.createElement('p');
      specialAttack.innerText = `Ataque Especial: ${result[15][1][3].base_stat}`;
      
      const specialDefense = document.createElement('p');
      specialDefense.innerText = `Defensa Especial: ${result[15][1][4].base_stat}`; 
      specialDefense.classList.add('pokemonStats');
      
      const speed = document.createElement('p');
      speed.innerText = `Velocidad: ${result[15][1][5].base_stat}`; 
      speed.classList.add('pokemonStats');
  
      const stats = document.createElement('div');
      stats.append(hp, attack, defense, specialAttack, specialDefense, speed);
      stats.classList.add('pokemonStatsContainer');  
      
      const container = document.createElement('div');
      container.append(pokemonImage , pokemonName ,pokemonType, stats);
      container.classList.add('container');
  
      allItems.push(container);
  
      appNode.append(...allItems);
  
    } catch (error) {
      alert( "Este pokemon no esta disponible. Intenta otro pokemon!");
    }
  }
  
  function deletePokemons() {
    let allPokemon = appNode.childNodes;
    allPokemon = Array.from(allPokemon);
  
    allPokemon.forEach(pokemon => {
      pokemon.remove(pokemon);
    });
  }