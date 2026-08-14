// EJERCICIOS BÁSICOS EN JAVASCRIPT

// 1. Variables y Sal consola
const rol = "Fullstack Junior";
let aniosExperiencia = 0;
console.log(`Aspirando al puesto de: ${rol} con ${aniosExperiencia} años de experiencia.`);

// 2. Funciones de Flecha
const sumar = (a, b) => a + b;
console.log("Suma 5 + 3 =", sumar(5, 3));

// 3. Métodos de Arreglos
const lenguajes = ["Python", "JavaScript", "TypeScript"];
lenguajes.forEach((lang, index) => {
    console.log(`${index + 1}. Aprendiendo ${lang}`);
});