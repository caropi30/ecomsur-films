//Agregar película
let filmList = [];
const cart = document.querySelector('#cart');
const countCart = document.querySelector('#countCart');
const shoppingCart = document.querySelector('#shoppingCart');
const darkBg = document.querySelector('#darkBg');



const updateFilms = () => {
    cart.innerHTML = '';
    if (filmList.length > 0) {
        for (let i = 0; i < filmList.length; i++) {
            let filmCard = `<div class="modal-cart--img">
                                <img src="${filmList[i].Poster}">
                            </div>
                            <div class="modal-cart--info">
                                <h3>${filmList[i].Title}</h3>
                                <p>${filmList[i].Year}</p>
                            </div>
                            <button class="btn-remove" onclick="removeFilm('${filmList[i].imdbID}');">Quitar</button>`;

                    cart.innerHTML += filmCard;

        }
    } else {
        console.log('No tienes películas');
    }

// Cantidad peliculas en botón de carrito
    countCart.innerHTML = filmList.length;
}

const addFilm = () => {
    if (filmSearch != '' && filmSearch != null) {
        filmList.push(filmSearch);
        console.log(filmSearch);
    } else {
        console.log('No has buscado una película');
    }
    //console.log(filmList);
    updateFilms();
}



//Quitar película

const removeFilm = (id) => {
    if (filmList.length > 0) {
        filmList = filmList.filter(film => film.imdbID != id);
        //console.log(filmSearch);
    } else {
        alert('No tienes películas');
    }
    //console.log(filmList);
    updateFilms();
}


//Display Carrito
shoppingCart.addEventListener("click", openModale = () => {
    darkBg.setAttribute('style', 'display:block;');
    cart.setAttribute('style', 'display:block;');
});

//Modal quitar

darkBg.addEventListener("click", closeModale = () => {
    darkBg.setAttribute('style', 'display:none;');
    cart.setAttribute('style', 'display:none;');
});

