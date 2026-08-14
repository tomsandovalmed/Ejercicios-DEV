# EJERCICIOS BÁSICOS EN PYTHON

# 1. Variables y Operaciones
nombre = "Futura Dev"
edad = 25
print(f"Hola, mi nombre es {nombre} y tengo {edad} años.")

# 2. Condicionales
def verificar_edad(edad):
    if edad >= 18:
        return "Es mayor de edad"
    else:
        return "Es menor de edad"

print(verificar_edad(edad))

# 3. Bucles (Listas)
tecnologias = ["Python", "JavaScript", "C#"]
print("Tecnologías a aprender:")
for tech in tecnologias:
    print(f"- {tech}")