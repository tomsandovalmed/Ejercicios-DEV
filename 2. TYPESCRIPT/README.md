# 💙 TypeScript: Guía Teórica Básica

## ¿Qué es y para qué sirve?
TypeScript añade **tipado estático** a JavaScript. Detecta errores en tiempo de desarrollo (antes de ejecutar el código) y es estándar en frameworks como React, Angular y NestJS.

## Conceptos Clave con Ejemplos

### 1. Tipos Explícitos
```typescript
let usuario: string = "Admin";
let id: number = 101;
let activo: boolean = true;

### 2. Interfaces (Estructuras de datos personalizadas)
interface Usuario {
    id: number;
    nombre: string;
    email?: string; // El signo '?' hace que el campo sea opcional
}

const u1: Usuario = { id: 1, nombre: "Lucía" };