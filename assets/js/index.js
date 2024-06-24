const propiedadesVenta = [
  {
    nombre: "Casa en el Bosque",
    src: "https://images.unsplash.com/photo-1502304104451-b61947b321ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Hermosa casa de campo",
    ubicacion: "Bosque tranquilo",
    habitaciones: 2,
    baños: 2,
    costo: 150000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en la playa",
    src: "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Gran casa frente al mar",
    ubicacion: "Playa Bonita",
    habitaciones: 4,
    baños: 2,
    costo: 350000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en Condominio",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casa moderna con piscina",
    ubicacion: "Ciudad",
    habitaciones: 2,
    baños: 2,
    costo: 300000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa en Villa",
    src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Acogedora casa en Villa",
    ubicacion: "Playa Bonita",
    habitaciones: 1,
    baños: 1,
    costo: 200000,
    smoke: false,
    pets: false,
  },
];

const propiedadesAlquiler = [
  {
    nombre: "Loft en el Centro",
    src: "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Moderno loft en el corazón de la ciudad",
    ubicacion: "Centro",
    habitaciones: 1,
    baños: 1,
    costo: 40,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Cabaña en el Campo",
    src: "https://images.unsplash.com/photo-1604091789437-f2021ea5179d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Acogedora cabaña rural",
    ubicacion: "Campo",
    habitaciones: 3,
    baños: 1,
    costo: 100,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Mansión en la Playa",
    src: "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Lujosa mansión a orilla de playa",
    ubicacion: "Playa",
    habitaciones: 7,
    baños: 5,
    costo: 600,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento en el centro",
    src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Moderno departamento en el centro de la ciudad.",
    ubicacion: "Centro",
    habitaciones: 3,
    baños: 2,
    costo: 90,
    smoke: false,
    pets: true,
  },
];
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
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p>
                            <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                            <i class="fas fa-bath"></i> ${propiedad.baños}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
                            <i class="fa-solid ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> ${
                                propiedad.smoke ? "Se permite fumar" : "No se permite fumar"
                            }
                        </p>
                        <p class="${propiedad.pets ? "text-success" : "text-danger"}">
                            <i class="fa-solid ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i> ${
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

// Renderizar propiedades en la página de inicio
const containerVenta = document.querySelector("#ventaContainer");
const containerAlquiler = document.querySelector("#alquilerContainer");

const url = window.location.href;
if (url.includes("index.html") || url.endsWith("/")) {
    if (containerVenta !== null) {
        renderizarPropiedades(propiedadesVenta.slice(0, 3), containerVenta);
    }
    if (containerAlquiler !== null) {
        renderizarPropiedades(propiedadesAlquiler.slice(0, 3), containerAlquiler);
    }
} else if (url.includes("venta.html") && containerVenta !== null) {
    renderizarPropiedades(propiedadesVenta, containerVenta);
} else if (url.includes("alquiler.html") && containerAlquiler !== null) {
    renderizarPropiedades(propiedadesAlquiler, containerAlquiler);
}