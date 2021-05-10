// Búsqueda película
const searchbar = document.querySelector('#searchbar');
const poster = document.querySelector('#poster');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const film = document.querySelector('#film');
let filmSearch = '';
let state = false;
const btnBurger = document.querySelector('#btnBurger');
const darkBg = document.querySelector('#darkBg');
const cart = document.querySelector('#cart');

//Petición película con botón
const searchFilm = async() => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=edd31456&t= ${searchbar.value}`)
        const data = await response.json()
        //poster.src = data.Poster;
        //title.innerHTML = data.Title;
        //description.innerHTML = data.Plot;
        filmSearch = data;
        //localStorage.setItem('Social', JSON.stringify(data));
        film.innerHTML = '';
        let filmCard = `<div class="film-card">
                                    <div class="film-card__img">
                                        <img id="poster" src="${filmSearch.Poster}">
                                    </div>
                                    <div class="film-card__info">
                                        <h3 class="film-card__info-title" id="title">${filmSearch.Title}</h3>
                                        <p class="film-card__info-description" id="description">${filmSearch.Plot}</p>
                                    </div>
                                    <button type="button" onclick="addFilm()" id="btnAdd">Agregar</button>
                                </div>`;

                film.innerHTML = filmCard;
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


//State Modal
  const showModal = () => {
      console.log('entro');
        if (state){
            console.log('entro2');
            darkBg.setAttribute('style', 'display:block;');
            cart.setAttribute('style', 'display:block;');                         
        } 
        else {
            console.log('entro3');
            darkBg.setAttribute('style', 'display:none;');
            cart.setAttribute('style', 'display:none;');
        }
        state = !state; 
        console.log(state);
  } 
  
  btnBurger.addEventListener("click", showModal());


 