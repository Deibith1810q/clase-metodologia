def calculadora():
    print("Bienvenido a la mini calculadora")
    num1 = float(input("Introduce el primer número: "))
    num2 = float(input("Introduce el segundo número: "))
    operacion = input("Introduce la operación a realizar (+, -, *, /): ")
    
    if operacion == "+":
        resultado = num1 + num2
    elif operacion == "-":
        resultado = num1 - num2
    elif operacion == "*":
        resultado = num1 * num2
    elif operacion == "/":
        resultado = num1 / num2
    else:
        print("Operación no válida")
        return
    
    print("El resultado de la operación es:", resultado)







Regenerate responseg