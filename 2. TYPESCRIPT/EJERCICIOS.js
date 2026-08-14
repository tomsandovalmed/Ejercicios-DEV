"use strict";
// EJERCICIOS BÁSICOS EN TYPESCRIPT
// 1. Tipado de Variables
let stack = "Fullstack";
let objetivoCumplido = false;
const aspirante = {
    nombre: "Dev Junior",
    tecnologias: ["JavaScript", "TypeScript", "Python", "C#"],
    disponibleParaContratar: true
};
function mostrarPerfil(c) {
    console.log(`Candidato: ${c.nombre}, Tecnologías: ${c.tecnologias.join(", ")}`);
}
mostrarPerfil(aspirante);
