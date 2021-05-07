const motto = document.querySelector('.input__motto')
const notes = document.querySelector('.input__notes')
const form = document.querySelector('form')
let array = loadFromLocalStorage('journalEntries') || [];
let arrayNotes = [];

function loadFromLocalStorage(key){
 return JSON.parse(localStorage.getItem(key))
}

form.addEventListener('submit', (event) => {
event.preventDefault();
const motto = form.label__motto__rating.value;
const notes = form.label__notes__rating.value;
const rating = form.rating.value;
const comprehension = form.comprehension.value;
const journalEntry = {motto, notes, rating, comprehension}
addEntryToArray(journalEntry)
postJournalEntry(journalEntry)

//const entry = form.label__motto__rating.value
//addEntryToArray(entry)
//console.log(form.label__motto__rating.value)
form.reset()
})

function addEntryToArray(journalEntry) {
    console.log(journalEntry)
array.push(journalEntry)
localStorage.setItem('journalEntries', JSON.stringify(array))
}

function postJournalEntry(entry) {
    fetch("https://muc-2020-w1-student-api.vercel.app/api/journals",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(entry)
     })
      .then((res) => res.json())
      .then((entries) => console.log(entries));
    }


/*
const people = [
    {
     name: "Harry",
     age: 11,
    }]
*/


/*function loadFromLocalStorage(){
    const dataFromLocal = JSON.parse(localStorage.getItem('mottoInStorage'))
    return dataFromLocal;
  }

*/
/*
//2.
formular.addEventListener('submit', (event) => {
  event.preventDefault();
  const pokedeck = formular.pokemonkarten.value;
  addPokemonInArray(pokedeck);
  formular.reset();
})

//3. push
function addPokemonInArray(pokemonInArray){
  pokeArray.push(pokemonInArray)
  localStorage.setItem('Pokeball:', JSON.stringify(pokeArray))
  //console.log(pokeArray)
}

//4 aus dem local rausladen
function loadFromLocalStorage(){
  const pokemonAusBallLocal = JSON.parse(localStorage.getItem('Pokeball:'))
  return pokemonAusBallLocal;
}

//5
pokeArray.forEach(jedesPokemonAusPokeArray =>
  renderPokemonKarten(jedesPokemonAusPokeArray))


//push() eine function
//gecallt, aufgerufen
*/