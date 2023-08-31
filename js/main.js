function saludo() {
    alert("Bienvenido a mi webside con bootstrap y Js");
}

function suma() {
    alert("sumara dos numeros ingresados")
    // DECLARAMOS LAS VARIBLES NECESARIAS
    let A = 0;
    let B = 0;
    let S = 0;
    // SOLICITAMOS LOS VALORES
    A = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
    // REALIZAMOS LOS PROCESOS
    S = A + B;
    // MOSTRAMOS EL RESULTADO EN PANTALLA
    alert("El resultado de la suma es:" + S);
}

function operaciones() {
    alert("se sumara, restara, dividira, multiplicara los numeros ingresados")
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let D = 0;
    let M = 0;


    A = parseInt(prompt("ingrese el primer valor"));
    B = parseInt(prompt("ingrese el segundo valor"));

    S = A + B;
    R = A - B;
    D = A / B;
    M = A * B;

    alert("los resultador de la suma es el siguiente:" + S);
    alert("los resultador de la resta es el siguiente:" + R);
    alert("los resultador de la divicion es la siguiente:" + D);
    alert("los resultador de la multiplicacion es el siguente:" + M);
    
}

function mayor() {
    alert("algoritmo que determinara el numero mayor entre los ingresados");

    let N1 = 0;
    let N2 = 0;

    N1 = parseInt(prompt("Ingrese el primer valor"));
    N2 = parseInt(prompt("Ingrese eL segundo valor"));

    if (N1 == N2) {
        alert("Los valores ingresados son iguales");
    }
    else if (N1 > N2) {
        alert("El numero mayor es:" + N1);
    }
    else{
        alert("EL numero mayor es:" + N2)
    }
}

function menor() {
    alert("Algoritmo que determinara el numero menor de los ingresados")

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let numeroMenor;

    num1 = parseInt(prompt("Ingrese el primer valor"));
    num2 = parseInt(prompt("Ingrese el segundo valor"));
    num3 = parseInt(prompt("Ingrese el tercer valor"));
    
    if (num1 <= num2 && num1 <= num3) {
    numeroMenor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
    numeroMenor = num2;
    } else {
    numeroMenor = num3;
    }

    // Mostrar el resultado
    alert("El número menor es: " +numeroMenor);    
}
// EL COLEGIO ABC REQUIERE UN ALGORITMO O UN SISTEMA QUE PERMITA A LOS DIFERENTES ESTUDIANTES INGRESAR SU NOMBRE, MATERIA, Y 7 CALIFICACIONES Y ESTE LE INDIQUE SI APROBO O REPROBO LA MATERIA TENIENDO EN CUENTA QUE SE APRUEBA SI EL PUNTAJE ES MAYOR O IGULA A 6

function promedio() {
    alert("ingrese los siguientes datos para consultar su aprovacion");
    let nombre = prompt(alert("ingrese su nombre"));
    let materia = prompt(alert("ingrese la materia"));
    let n1 = parseInt(prompt("Ingrese la primera nota"));
    let n2 = parseInt(prompt("Ingrese la segunda nota"));
    let n3 = parseInt(prompt("Ingrese la tercera nota"));
    let n4 = parseInt(prompt("Ingrese la cuarta nota"));
    let n5 = parseInt(prompt("Ingrese la quinta nota"));
    let n6 = parseInt(prompt("Ingrese la sexta nota"));
    let n7 = parseInt(prompt("Ingrese la septima nota"));

    T = n1 + n2 + n3 + n4 + n5 + n6 + n7;

    R = T / 7;
    
    if (R > 6) {
        alert("FELICIDADES USTED APROVO ESTA MATERIA, SU NOTA FUE LA SIGUIENTE  " + R );
    } else {
        alert("USTED NO APROVO ESTA MATERIA, SU NOTA FUE LA SIGUIENTE  " + R);
    }
}

// SE REQUIERE UN SISTEMA O ALGORITMO QUE AL INGRESAR EL VALOR EN DOLARES NOS INDIQUE A CUANTOS PESOS COLOMBIANOS, EUROS, SOLES EQUIVALE

function conversion() {
    alert("SE REALIZARA LA CONVERSION DE DINERO");
    let pesos = 4.119;
    let soles = 3.72;
    let euro = 0.92;
    let valor = parseInt(prompt("Ingrese el valor en dolares"));

    valorcolo = valor * pesos;
    valorsol = valor * soles; 
    valoreu = valor * euro;

    alert("Este es la cantidad en pesos colombianos " + valorcolo)
    alert("Este es el valor en soles peruanos " + valorsol)
    alert("Este es el valor en euro español " + valoreu)

}

// UN INDIVIDUO DESEA INVERTIR SU CAPITAL EN UN BANCO Y REQUIERE EN SABER CUANTO DINERO GANARA DESPUES DE N NUMERO DE AÑOS TENIENDO EN CUENTA QUE EL BANCO PAGA UN INTERES DEL 1,3 PORCIENDO MENSUAL
function CDT() {
    alert("conozca la canridad de su CDT")

    let taza = 1.3
    let meses = 12

    let dinero = prompt("Ingrese la cantidad de dinero que desea depositar")
    let años = parseInt(prompt("Ingresa la cantidad de años de duracion del CDT"))

    R = dinero * taza
    T = R * meses * años


    alert("el total del dinero a ganar es: " + T)
}

// PROMEDIO CON FOR HECHO POR CHATGPT
function promediofor() {
    // Función para calcular el promedio de calificaciones
function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
      suma += calificaciones[i];
    }
    return suma / calificaciones.length;
  }
  
  // Función para determinar si un estudiante aprobó o reprobó
  function determinarResultado(nombre, materia, calificaciones) {
    const promedio = calcularPromedio(calificaciones);
  
    if (promedio >= 6) {
      alert(`${nombre} ha aprobado la materia ${materia} con un promedio de ${promedio}`);
    } else {
      alert(`${nombre} ha reprobado la materia ${materia} con un promedio de ${promedio}`);
    }
  }
  
  // Ejemplo de uso
  const nombreEstudiante = prompt("Ingrese su nombre:");
  const materiaEstudiante = prompt("Ingrese la materia:");
  const calificacionesEstudiante = [];
  
  for (let i = 1; i <= 7; i++) {
    const calificacion = parseInt(prompt(`Ingrese la calificación ${i}:`));
    calificacionesEstudiante.push(calificacion);
  }
  
  determinarResultado(nombreEstudiante, materiaEstudiante, calificacionesEstudiante);
  
}

function panelLateral() {
    const panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");  
}

function panelsuperior() {
    const panel = document.getElementById("panel-superior");

    panel.classList.toggle("active");  
}

function circulo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("circulo");
}

function triangulo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("triangulo");
}

function rombo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("rombo");
}

function degradado() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("degradado");
}

function horizontal() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("horizontal");
}

function vertical() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("vertical");
}

function moveTop(){
    const figura = document.querySelector("#figura");

    figura.classList.toggle("top");
}

function moveRight(){
    const figura2 = document.querySelector("#figura");

    figura.classList.toggle("right");
}

function moveLeft(){
    const figura = document.querySelector("#figura");

    figura.classList.toggle("left");
}

function moveBottom(){
    const figura = document.querySelector("#figura");

    figura.classList.toggle("bottom");
}