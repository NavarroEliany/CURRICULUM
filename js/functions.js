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
var name = "Karen Marcela"; //var: variables globales, se puede utilizar en todo el código (STRING)
let edad = 17; //valores que van a cambiar (ENTERO)
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
}
function send_form(){
    let name      = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
            title: "Cajas de texto vacías",
            text: "Algunas cajas de texto se encuentran vacías",
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
        document.getElementById("print").innerText = "Su nombre es: "+name+" "+last_name;
        document.getElementById("name").style.border = "2px solid green";
        document.getElementById("last_name").style.border = "2px solid green";
    }
}

//ARRAYS
var array_semana = ["Lunes", "Martes", "Mièrcoles", "Jueves", "Viernes", "Sabado", "Domingo"]
var array_gra1= [1,2,2.5,"abc","Soy Karen"]
var array_num= [1,2,3,4,5,6,7,8,9];

var array_multi = [
  {name: "Karen" , age: 17, color: "Rojo"},
  {name: "Karol" , age: 18, color: "Blanco"},
  {name: "Daniela" , age: 20, color: "Negro"},
  {name: "Andrey" , age: 24, color: "Verde"}
];

var json_ejem = {
  name: "Karen",
  lasname: "Bayona",
  phone :"3143926679" ,
  email: "kmbayonam@ufpso.edu.co"
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
  let array_add = array_numerico.push(num);
  array_add = array_num.push(10);
  console.log(array_add);
  console.log(array_numerico);
  document.getElementById("impresion" ).value = array_numerico;

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