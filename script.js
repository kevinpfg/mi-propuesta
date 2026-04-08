// ELEMENTOS
const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
const pantalla1 = document.getElementById("pantalla1");
const pantalla2 = document.getElementById("pantalla2");
const carta = document.getElementById("carta");
const musica = document.getElementById("musica");

// 🎹 ACTIVAR MUSICA
document.body.addEventListener("click", () => {
    musica.play();
});

// 😈 FUNCIÓN MOVER BOTÓN
function moverBoton() {
    const x = Math.random() * (window.innerWidth - botonNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - botonNo.offsetHeight);

    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
}

// 🔥 SE MUEVE CUANDO LO INTENTAN TOCAR
botonNo.addEventListener("mouseenter", moverBoton); // PC
botonNo.addEventListener("touchstart", (e) => {     // CELULAR
    e.preventDefault();
    moverBoton();
});
botonNo.addEventListener("click", moverBoton);      // EXTRA SEGURIDAD

// ❤️ BOTÓN SI CAMBIA DE PANTALLA
botonSi.addEventListener("click", () => {
    pantalla1.style.display = "none";
    pantalla2.style.display = "block";

    // abrir carta
    setTimeout(() => {
        carta.classList.add("abierta");
    }, 300);

    crearCorazones();
});

// 💖 CORAZONES
function crearCorazones() {
    const colores = ["💖","💘","💝","💗","💓","💞"];

    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");

        corazon.innerHTML = colores[Math.floor(Math.random() * colores.length)];

        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.top = window.innerHeight + "px";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 4000);
    }, 250);
}