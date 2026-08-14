// EJERCICIOS BÁSICOS EN TYPESCRIPT

// 1. Tipado de Variables
let stack: string = "Fullstack";
let objetivoCumplido: boolean = false;

// 2. Uso de Interfaces
interface Candidato {
    nombre: string;
    tecnologias: string[];
    disponibleParaContratar: boolean;
}

const aspirante: Candidato = {
    nombre: "Dev Junior",
    tecnologias: ["JavaScript", "TypeScript", "Python", "C#"],
    disponibleParaContratar: true
};

function mostrarPerfil(c: Candidato): void {
    console.log(`Candidato: ${c.nombre}, Tecnologías: ${c.tecnologias.join(", ")}`);
}

mostrarPerfil(aspirante);