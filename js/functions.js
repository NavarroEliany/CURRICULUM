// 4 Formas de impresión
// alert("HOLA DESDE UN ARCHIVO EXTERNO");
// console.log("HOLA DESDE LA CONSOLA");
// document.write("HOLA DESDE LA INTERFAZ");
// // Swal.fire("HOLA DESDE SWETTALERT");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "error"
//   });

// VARIABLES Y TIPOS DE DATOS
const pi  = 3.14; //decimal
const pul = 2.54;
var name  = "Eliany Navarro"; //string
let edad  = 32; //entero
var ver   = true; //boolean
let fal   = false; //boolean

//OPERADORES BÁSICOS
var suma = 5+2;
console.log(suma)
var var_uno = 10;
var var_dos = 5;
console.log(var_uno-var_dos);
console.log(var_uno*var_dos);
console.log(var_uno/var_dos);
console.log(var_uno%var_dos);

//OPERADORES DE COMPARACIÓN
// = Asignación
// == comparación (valor)
// === estrictamente comparado (valor y el tipo de dato)
// > / >= / <= / < / <>

console.log("Mi edad es: " + edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        showConfirmButton: false,
        timer: 2000
    });
    document.getElementById("text").innerText="El array a calcular es: "+array_num;
    document.getElementById("impresion").value= array_num;
}

function send_form(){
    let name        = document.getElementById("name").value;
    let last_name   = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
            title: "Cajas de Texto vacías",
            text: "Alguna de las cajas de texto se encuentra vacía",
            icon: "error"
        });
        if(name.length == 0){
            document.getElementById("name").style.border = "2px solid red"
        }
        else{
            document.getElementById("name").style.border = "2px solid green"
        }
        if(last_name.length == 0){
            document.getElementById("last_name").style.border = "2px solid red"
        }
        else{
            document.getElementById("last_name").style.border = "2px solid green"
        }
        
    }
    else{
        document.getElementById("print").innerText = "Su nombre es: " + name +" "+ last_name;
    }
}

//ARRAYS
var array_semana = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var arry_gral = [1, 2, 2.5, "abc", "Soy Eliany"];
var array_num = [1,2,3,4,5,6,7,8,9];

var array_multi = [
    {name: "Eliany", age:17, color: "Negro"},
    {name: "santiago", age:7, color: "Azul"},
    {name: "Aslid", age:9, color: "Rojo"},
    {name: "Sofia", age:7, color: "Rosa"}

];

var json_ejm = {
    name: "Eliany",
    lastname: "Navarro",
    phone: "3132307459",
    email: "elnavarrob@ufpso.edu.co"
};

console.log (array_semana);
console.log (array_gral);
console.log (array_num);
console.log (array_multi);
console.log (array_ejm);

function action (){
   //alert(array_num);
    Swal.fire(""+array_num);
    console.log(array_num);
    console.log(array_num.length);
    var result=0;
    for(let i=0; i<array_num.length; i++){
        result=result+array_num[i]

       // let total =0;
       // for (let i=1; i<=15; i++){
         //   total=total+1;
        //}
        //console.log= (total); EJERCICIO APARTE
    }

    document.getElementById("result").innerHTML= "<strong>El resultado es: "+result +"</strong> " ;
    document.getElementById("result").style.color = "purple";
    //CON UN FOR
    var total =0;
    for (var j=o; j<array_multi.length; j++){
        total=array_multi[j].age +total;
        alert(total);
    }
    //CON UN WHILE
    var total_dos =0;
    var w=0;
    while(w<array_multi.length){
        total_dos=array_multi[w].age +total_dos;
        w++;
    }
    alert(total_dos);
}
var array_numerico = [1,2,3,4,5,6,7,8,9];
function eliminar (){
    let array_delete = array_numerico.pop();
    console.log(array_delete);
    console.log(array_numerico);
    document.getElementById("impresion").value= array_numerico;
}
function agregar (){
    let num = document.getElementById("num").value;
    let array_add= array_numerico.push(num);
    console.log(array_add);
    console.log(array_numerico);
    document.getElementById("impresion").value= array_numerico;
}
//AGREGAR EL ULT Y EL PRIM LIMPIAR Y AL REVES