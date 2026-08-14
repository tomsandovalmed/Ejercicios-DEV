// EJERCICIOS BÁSICOS EN C#
using System;

namespace EjerciciosDev
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1. Variables y Tipos
            string lenguaje = "C#";
            int nivel = 1;
            Console.WriteLine($"Iniciando con {lenguaje} en el nivel {nivel}");

            // 2. Llamada a un método estático
            int resultado = Multiplicar(4, 5);
            Console.WriteLine($"Resultado de la multiplicación: {resultado}");
        }

        // 3. Métodos
        static int Multiplicar(int a, int b)
        {
            return a * b;
        }
    }
}