

//La creacion de la barra de navegacion desde .js esta hecho solamente para index.html, en el resto de las paginas no lo 
//termine. Cuando voy al INICIO desde la barra de navegacion me da un error, evidentemente no esta bien hecho el tema de crearlo desde el .js
// Tambien tuve problemas al intentar centrel el select del formu;lario de simulacion, asi como los input de monto y plazo, me gustaria que quedaran m'as prolijos.


document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');

    const navegacion = document.createElement('div');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const enlaces = [

        { link: "index", 
        nombre: "Inicio" },

        { link: "hipotecario", 
        nombre: "Hipotecario" },

        { link: "automotor", 
        nombre: "Automotor" },

        { link: "pyme", 
        nombre: "Pyme" },

        { link: "prestamoPersonal", 
        nombre: "Préstamo Personal" }
    ];

    header.appendChild(navegacion);
    navegacion.appendChild(nav);
    nav.appendChild(ul);
    navegacion.className = "navbar";
    nav.className = "nav"; 
    for (const link of enlaces) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="./pages/${link.link}.html">${link.nombre}</a>`;
        ul.appendChild(li);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const anioPiePag = document.getElementById('pieDePagina');
    const anioActual = new Date().getFullYear();
    if (anioPiePag) {
        anioPiePag.textContent = `CoderHouse ${anioActual}`;
    }
});
