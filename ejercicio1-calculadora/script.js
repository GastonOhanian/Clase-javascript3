// Ejercicio 1: Calculadora Interactiva
// Instrucciones: Completa las siguientes funciones

// Variable para almacenar el resultado
let currentInput = '';
let shouldResetDisplay = false;

/**
 * Función para agregar números y operadores al display
 * @param {string} value - El valor a agregar (número u operador)
 * 
 * TAREA: Implementa esta función para:
 * 1. Obtener el elemento del display por su ID
 * 2. Agregar el valor al input actual
 * 3. Actualizar el display con el nuevo valor
 * 4. Manejar el caso cuando shouldResetDisplay es true
 */
function appendToResult(value) {
    const display= document.getElementById('result');
if (shouldResetDisplay){
    currentInput='';
    shouldResetDisplay=false;
}
currentInput+=value;
display.value=currentInput;
}

/**
 * Función para calcular el resultado de la expresión
 * 
 * TAREA: Implementa esta función para:
 * 1. Obtener el valor actual del display
 * 2. Evaluar la expresión matemática de forma segura
 * 3. Mostrar el resultado en el display
 * 4. Manejar errores (división por cero, sintaxis incorrecta)
 */
function calculateResult() {
        const display= document.getElementById('result');
        if(!isValidExpression(currentInput)){
            display.value='Error';
            shouldResetDisplay=true;
        }
try{
const result=eval(currentInput);

if(!isFinite(result)){
    display.value='value'
}else{
    display.value=result;
    currentInput=result.toString()
}

}catch(error){
    display.value='error';

}
   shouldResetDisplay=true;
}

/**
 * Función para limpiar completamente el display
 * 
 * TAREA: Implementa esta función para:
 * 1. Limpiar el display
 * 2. Resetear las variables de control
 */
function clearResult() {
    const display= document.getElementById('result');
    currentInput='';
    display.value='';
    shouldResetDisplay=false;
}

/**
 * Función para borrar el último carácter ingresado
 * 
 * TAREA: Implementa esta función para:
 * 1. Obtener el valor actual del display
 * 2. Eliminar el último carácter
 * 3. Actualizar el display
 */
function deleteLast() {
    const display= document.getElementById('result');
    currentInput=currentInput.slice(0, -1);
    shouldResetDisplay=true;
}

// FUNCIONES DE AYUDA (ya implementadas)

/**
 * Función para validar si un carácter es un operador
 */
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

/**
 * Función para validar si la expresión es válida
 */
function isValidExpression(expression) {
    // Evita operadores consecutivos
    if (/[+\-*/]{2,}/.test(expression)) {
        return false;
    }
    
    // Evita que termine en operador
    if (isOperator(expression[expression.length - 1])) {
        return false;
    }
    
    // Evita que empiece con operador (excepto -)
    if (['+', '*', '/'].includes(expression[0])) {
        return false;
    }
    
    return true;
}

// BONUS: Soporte para teclado (ya implementado)
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.') {
        appendToResult(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendToResult(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
        event.preventDefault();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearResult();
    } else if (key === 'Backspace') {
        deleteLast();
        event.preventDefault();
    }
});