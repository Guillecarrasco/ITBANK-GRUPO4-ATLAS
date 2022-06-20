let ids = [
	"dolaroficial",
	"dolarblue",
	"dolarsoja",
	"dolarccl",
	"dolarbolsa",
    "bitcoin",
	"dolarturista",
    "dolar",
	"argentina",
];


function api_request(){
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(response=>response.json())
    .then(data=>{
        for(let i in ids){
            console.log(data[i].casa.nombre);
            let contenido= document.getElementById(ids[i]);            
            contenido.innerHTML=`${data[i].casa.nombre}<br>
            <p>Precio Compra: ${data[i].casa.compra}</p><br>
            <p>Precio Venta: ${data[i].casa.venta}</p>`;      
        }      
    })
}

function main(){
    setInterval(()=>{
        api_request();
    },50000)
}

function FbotonOn() {
    var uno = document.getElementById('botonOn');
    if (uno.innerHTML == 'Ocultar Detalles') 
        uno.innerHTML = 'Ver Detalles';
    else uno.innerHTML = 'Ocultar Detalles'; 
  }
  
  function todos(){
    api_request();
    FbotonOn();
}



//  api_request();
//  main();

//  verDivisas.onclick = function()
// {
//     console.log("Ver divisas...");
//     api_request();
//     main();
// }