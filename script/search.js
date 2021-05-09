// Búsqueda película
const searchbar = document.querySelector('#searchbar');
const poster = document.querySelector('#poster');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

let filmSearch = '';

//Petición película con botón
const searchFilm = async() => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=edd31456&t= ${searchbar.value}`)
        const data = await response.json()
        poster.src = data.Poster;
        title.innerHTML = data.Title;
        description.innerHTML = data.Plot;
        filmSearch = data;
        console.log(filmSearch);
        //localStorage.setItem('Social', JSON.stringify(data));
        }    
    catch (error) {
        console.warn(error)
    }
}

//Buscar con tecla Enter

searchbar.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector("#btnSearch").click();
    }
  });


 