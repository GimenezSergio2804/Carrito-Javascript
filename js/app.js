// variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// funciones

function agregarCurso(e){
    e.preventDefault();

    if( e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// lee la informacion del curso al que le dimos click y la extraemos

function leerDatosCurso(curso){
    console.log(curso);

    // crear contenido con los datos del curso
    const infoCurso = {
        imagen : curso.querySelector('.imagen-curso').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }
    // agregar elementos al arreglo de carrito

    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el carrito de compras en el html

function carritoHTML(){

    // limpiar el html
    limpiarHTML();

    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        
        `;
        // agrega el html al tbody
        contenedorCarrito.appendChild(row);
    })
}

//elimina los curso del tbody
function limpiarHTML(){
    // forma lenta
    // contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}