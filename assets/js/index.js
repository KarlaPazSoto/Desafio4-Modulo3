const propiedadesVenta = [
  {
    nombre: "Casa en la playa",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Hermosa casa frente al mar.",
    ubicacion: "Playa Bonita",
    habitaciones: 3,
    baños: 3,
    costo: 300000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en la playa",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Hermosa casa frente al mar.",
    ubicacion: "Playa Bonita",
    habitaciones: 3,
    baños: 2,
    costo: 300000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en la playa",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Hermosa casa frente al mar.",
    ubicacion: "Playa Bonita",
    habitaciones: 3,
    baños: 2,
    costo: 300000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en la playa",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Hermosa casa frente al mar.",
    ubicacion: "Playa Bonita",
    habitaciones: 3,
    baños: 2,
    costo: 300000,
    smoke: false,
    pets: true,
  },
];

const propiedadesAlquiler = [
  {
    nombre: "Departamento en el centro",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Moderno departamento en el corazón de la ciudad.",
    ubicacion: "Centro",
    habitaciones: 2,
    baños: 2,
    costo: 800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento en el centro",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Moderno departamento en el corazón de la ciudad.",
    ubicacion: "Centro",
    habitaciones: 2,
    baños: 2,
    costo: 800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento en el centro",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Moderno departamento en el corazón de la ciudad.",
    ubicacion: "Centro",
    habitaciones: 2,
    baños: 2,
    costo: 800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento en el centro",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Moderno departamento en el corazón de la ciudad.",
    ubicacion: "Centro",
    habitaciones: 2,
    baños: 2,
    costo: 800,
    smoke: true,
    pets: false,
  },
];

const containerVenta = document.querySelector("#containerVenta");
const containerAlquiler = document.querySelector("#containerAlquiler");

if (containerVenta !== null) {
  renderizarPropiedades(propiedadesVenta.slice(0, 3), containerVenta);
}

if (containerAlquiler !== null) {
  renderizarPropiedades(propiedadesAlquiler.slice(0, 3), containerAlquiler);
}
function renderizarPropiedades(propiedades, container) {
  container.innerHTML = "";
  propiedades.forEach((propiedad) => {
    const template = `
      <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del ${propiedad.nombre}"
            />
            <div class="card-body">
                <h5 class="card-title">
                    ${propiedad.nombre}
                </h5>
                <p class="card-text">
                    ${propiedad.descripcion}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                    <i class="fas fa-bath"></i> ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> ${
                      propiedad.smoke
                        ? "Se permite fumar"
                        : "No se permite fumar"
                    }
                </p>
                <p class="${propiedad.pets ? "text-success" : "text-danger"}">
                    <i class="fa-solid ${
                      propiedad.pets ? "fa-paw" : "fa-ban"
                    }"></i> ${
      propiedad.pets ? "Se permiten mascotas" : "No se permiten mascotas"
    }
                </p>
            </div>
        </div>
      </div>
    `;
    container.innerHTML += template;
  });
}

// Renderizar todas las propiedades en sus respectivas páginas
const url = window.location.href;
if (url.includes("venta.html") && containerVenta !== null) {
  renderizarPropiedades(propiedadesVenta, containerVenta);
} else if (url.includes("alquiler.html") && containerAlquiler !== null) {
  renderizarPropiedades(propiedadesAlquiler, containerAlquiler);
}
