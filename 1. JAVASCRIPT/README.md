# 💛 JavaScript: Guía Teórica Básica

## ¿Qué es y para qué sirve?
JavaScript es el lenguaje de la Web. Permite dar interactividad a sitios web en el cliente (Frontend) y ejecutar lógica de servidor en el backend gracias a **Node.js**.

## Conceptos Clave con Ejemplos

### 1. Declarándolo todo con `const` y `let`
Evitamos `var`. Usamos `const` cuando el valor no cambiará y `let` cuando sí.
```javascript
const pais = "Chile";
let puntaje = 100;
puntaje = 150; // Correcto

### 2. Funciones de Flecha (Arrow Functions)
Una forma moderna y concisa de declarar funciones:

const saludar = (nombre) => `Hola, ${nombre}`;

### 3. Métodos de Arreglos (map, filter)

const numeros = [1, 2, 3, 4];
const dobles = numeros.map(num => num * 2); // [2, 4, 6, 8]