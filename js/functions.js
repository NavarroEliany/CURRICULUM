// Cuatro formas de impresion

// alert("Hola desde un archivo externo");
// console.log ("Hola desde la consola");
// document.write("Hola desde la interfaz");
// Swal.fire("Hola desde swettalert!"); //Extraido de sweetalert2

// VARIABLES Y TIPOS DE DATOS
const pi = 3.14; //const "DATO DECIMAL" es contanter que se aplica a valores que nunca van a cambiar
const pul = 2.54;
var name = "Eliany Navarro"; //Var "STRING" es para variables globales
let edad = 17; // "ENTEROS"Para valores para funciones
var ver = true // boolean
let fal =false //boolean 

//OPERADORES BASICOS
var suma = 5+2;
console.log (suma)
var var_uno = 10 ;
var var_dos = 5;
console.log (var_uno-var_dos);
console.log (var_uno*var_dos);
console.log (var_uno/var_dos);

//OPERADORS DE COMPARACIÓN
// =asignación
// ==comparacion (valor)
// ==estrictamente comparado (valor y el tipo de dato)
// > / >= / < / <=

console.log ("Mi edad es: " + edad);
// lleva , y no lleva por que esta en un json{} que es igual a un array
function load_page (){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        //imageHeight: 1500,
        //imageAlt: "A tall image"
        showConfirmButton: false,
        timer: 2000
      });
}

function send_form (){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("las_name").value;
    if (name.length == 0){
        Swal.fire({
            icon: "error",
            title: "Cajas de tecto vacias",
            text: "Alguna de las cajas de texto se encuentra vacia",
          
          });
          if (name.length == 0){
            document.getElementById ("name").style.border = "2px solid red"
          }
          else{
            document.getElementById ("name").style.border = "2px solid green"
          }
          if (last_name.length == 0){
            document.getElementById ("last_name").style.border = "2px solid red"
          }

    
    else{
        document.getElementById ("last_name").style.border = "2px solid green"

    }
    }
    else{
        document.getElementById("print").innerText = "Su nombre es: " + name+" "+last_name;
    }
}