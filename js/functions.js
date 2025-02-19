// 4 Formas de impresión
// alert("Hola mundo")
// console.log("HOLA DESDE LA CONSOLA");
// document.write("HOLA DESDE LA INTERFAZ");
// Swal.fire("HOLA DESDE SWETTALERT");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "error"
//   });

// VARIABLES Y TIPOS DE DATOS
const pi = 3.14; //Cons: se aplica a valores que no van a cambiar (DECIMAL)
const ul = 2.54; 
var name = "Eliany Navarro"; //var: variables globales, se puede utilizar en todo el código (STRING)
let edad = 18; //valores que van a cambiar (ENTERO)
var ver = true; //BOOLEAN
let fal = false; //BOOLEAN

//OPERADORES BÁSICOS
var suma = 5+2;
console.log(suma);
var var_uno = 10;
var var_dos = 5;
console.log(var_uno-var_dos);
console.log(var_uno*var_dos);
console.log(var_uno/var_dos);
console.log(var_uno%var_dos);

//OPERADORES DE COMPARACIÓN
// = Asignación
// == Comparación ( valor)
// === Estrictamente comparado (valor y el tipo de dato )
// > >= < <= <>

console.log("Mi edad es: "+edad);

//EVENTO
function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        // imageHeight: 1500,
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer:2000
      });

      document.getElementById("text").innerText = "El array a calcular es: "+array_num; 
      document.getElementById("impresion").value = array_num; 
      document.getElementById("name_search").value = nombre_form;

      let hour_system = new Date();

      console.log(hour_system.getDate());
      console.log(hour_system.getDay());
      console.log(hour_system.getFullYear());
      console.log(hour_system.getHours());
      console.log(hour_system.getMilliseconds());
      console.log(hour_system.getMinutes());
      console.log(hour_system.getMonth());
      console.log(hour_system.getSeconds());
      console.log(hour_system.getTime());


      let mes = hour_system.getMonth()+1;
      let dia = hour_system.getDay();
      let meses =  ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto", "Septiembre","Octubre","Noviembre","Diciembre"];
      let dias =  ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

      console.log("Fecha: "+hour_system.getDate()+"/"+mes+"/"+hour_system.getFullYear());

      document.getElementById("hour_system"). value = hour_system;
}
function send_form(){
    let name      = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let pass_one  = document.getElementById("pass_one").value;
    let pass_two  = document.getElementById("pass_two").value;
    if(name.length == 0 || last_name.length == 0 || pass_one.length == 0 || pass_two.length == 0){
        Swal.fire({
            title: "Cajas de texto vacías",
            text: "Algunas cajas de texto se encuentran vacías",
            icon: "error"
        });
          // if(name.length == 0){
          //   document.getElementById("name").style.border = "2px solid red"
          // }
          // else{
          //   document.getElementById("name").style.border = "2px solid green"
          // }
          // if(last_name.length == 0){
          //   document.getElementById("last_name").style.border = "2px solid red"
          // }
          // else{
          //   document.getElementById("last_name").style.border = "2px solid green"
          // }
    }
    else if (pass_one != pass_two){
      Swal.fire({
        title: "Sus contraseñas no son iguales",
        text: "Por favor valide sus credenciales correctamente",
        icon: "error"
      });
    }
    else{
        document.getElementById("print").innerText = "Su nombre es: "+name+" "+last_name;
        console.log(isNaN(name));
    }
}


//ARRAYS
var array_semana = ["Lunes", "Martes", "Mièrcoles", "Jueves", "Viernes", "Sabado", "Domingo"]
var array_gra1= [1,2,2.5,"abc","Soy Eliany"]
var array_num= [1,2,3,4,5,6,7,8,9];

var array_multi = [
  {name: "Eliany", age: 18, color: "Negro"},
  {name: "Nikoll", age: 15, color: "Azul"},
  {name: "Sofia", age: 8, color: "Rosa"},
  {name: "Melisa" , age: 2, color: "Rojo"}
];

var json_ejem = {
  name: "Eliany",
  lasname: "Navarro",
  phone :"3132307459" ,
  email: "elnavarrob@ufpso.edu.co"
};

console.log(array_semana);
console.log(array_gra1);
console.log(array_num);
console.log(array_multi);
console.log(json_ejem);

function action(){
  // alert(array_num);
  // Swal.fire(""+array_num); //deja un expacio y le concateno el array_num porque el swal.fire solo muestra valores tipo STRING
  // console.log(array_num);
  // console.log(array_num.length);
  var result=0;
  for(let i=0;i<array_num.length;i++){
    result = result+array_num[i];
  }
 
  document.getElementById("result").innerHTML = "<strong>El resultado es: "+result+" </strong>";
  document.getElementById("result").style.color = "green";

  var total=0;
  for(var j=0;j<array_multi.length;j++){
    total = array_multi[j].age + total;
  }
  alert(total);

  var total_dos = 0;
  var w= 0;
  //CON UN WHILE
  while(w<array_multi.length){
    total_dos = array_multi[w].age + total_dos;
    w++;
  }
  alert(total_dos);
}

var array_numerico = [1,2,3,4,5,6,7,8,9];
function eliminar(){
  array_delete = array_numerico.pop(num);
  console.log(array_delete);
  console.log(array_numerico);
  document.getElementById("impresion" ).value = array_numerico;
}

function agregar(){
  let num = document.getElementById("num").value;
  

  if(isNaN(num) == true){
    Swal.fire("Solo se aceptan numeros");
  }
  else {
    let array_add = array_numerico.push(num);
    array_add = array_num.push(10);
    console.log(array_add);
    console.log(array_numerico);
    document.getElementById("impresion" ).value = array_numerico;
  }

}

function agregar_prim(){
  let num = document.getElementById("num").value;
  let array_add = array_numerico.unshift(num);
  document.getElementById("impresion").value = array_numerico;
}

function eliminar_prim(){
  let num = document.getElementById("num").value;
  let array_add = array_numerico.shift(num);
  document.getElementById("impresion").value = array_numerico;
}

function reves(){
  document.getElementById("impresion").value = array_numerico.reverse();
}

function limpiar(){
  document.getElementById("num").value = "";
  document.getElementById("numDelete").value = "";
  document.getElementById("name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("result").innerText= "";
}

var nombre_form = "ELIANY NAVARRO " ; 

function search(){
  let nombre_buscar = document.getElementById("name_search").value;
  // Swal.fire(nombre_buscar.toLowerCase()); 
  // Swal.fire({
  //   title: nombre_buscar.toLowerCase(),
  //   text: "Alguna de las cajas de texto se encuentra vacìa",
  //   icon: "error"
  // });

  // Swal.fire(nombre_buscar.charAt(0));
  // let word = nombre_buscar.indexOf('e');
  // let word = nombre_buscar.lastIndexOf('e');
  // let word = nombre_buscar.substring(5);
  let word = nombre_buscar.split("");
  Swal.fire(word+"");
  let word_com = word.join("");
  console.log(word_com);

  

}
