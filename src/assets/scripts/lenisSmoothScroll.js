import "../styles/lenis.css";

import Lenis from "lenis";

// Script para manejar la configuración de la biblioteca Lenis para un desplazamiento fluid
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
ne362;
