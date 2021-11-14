
var latitude
var longitude
var endereco
var map
var marcador

var mapaFrame= document.querySelector('gmap_canvas')

var marcCritBtn= document.querySelector('btnMarcCrit')
var marcRegbtn= document.querySelector('btnMarcReg')



function initMap() {

  if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position)
      console.log("Funciona")

      const myLatLng = { 
        lat: position.coords.latitude, 
        lng: position.coords.latitude 
        
      };
      
      var mapOptions = {
        center: {
          lat: position.coords.latitude, 
          lng: position.coords.longitude
        },
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      
      var marcardor = new google.maps.Marker({
        position:  {lat: position.coords.latitude, lng: position.coords.longitude},
        map,
        title: "SALVE MUNDO",
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor: "black",
          scale: 8
        }
      })
      

      document.getElementById('latLabel').value= position.coords.latitude
      document.getElementById('longLabel').value= position.coords.longitude


      map= new google.maps.Map(document.getElementById('map'), mapOptions);
      marcardor.setMap(map);
    }
  )} 
  else {
    alert("ERRO AO CARREGAR")
  }

  

}


function setMarcCritico(){
  
  if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(function(position){    

      var imagem = "icones/bolinha vermelha.png"
      const novoMarcador = new google.maps.Marker({
        position:  {lat: position.coords.latitude, lng: position.coords.longitude},
        map,
        title: "Estado critico",
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor:"red",
          scale: 8
        },
      })
      
      novoMarcador.setMap(null)
      novoMarcador.setMap(map)
      
    })
  
    
  }

}

function setMarcRegular(){
  
  if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(function(position){    

      
      const novoMarcador = new google.maps.Marker({
        position:  {lat: position.coords.latitude, lng: position.coords.longitude},
        map,
        title: "Estado critico",
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor:"yellow",
          scale: 8
        },
      })
      
      novoMarcador.setMap(null)
      novoMarcador.setMap(map)
    })
      
  }
}

function finalizar(){


  if(document.getElementById('estCrit').checked == false || document.getElementById('estReg').checked == false){

    alert('Por favor selecione o estado do poste')
    return false;

  }
  else if(document.getElementById('comentTxt').value == ''){
    alert("Por favor descreva o problema")
    return false;

  }
  else{
    
    alert('Registrado com Sucesso! Obrigado por usar nosso sistema!!!')
    return true
  }

  return false;
}



/*
marcCritBtn.addEventListener('click',function(){
  setMarcCritico()
})*/











/* CASO DESEJE VERIFICAR PERIODIACAMENTE


const watcher = navigator.geolocation.watchPosition(function(position){
  console.log(position)
})






<iframe embed defer width="370" height="200" id="map_canvas" 
      src=""  
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
        ></iframe>s



function initialize() {
  
  var mapOptions = {
    center: {lat: -20.5717504, lng:-48.5588992},
    zoom: 25,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);
}










EM HIPOTESE NENHUMA APAGAR ISSO



if('geolocation' in navigator){


    navigator.geolocation.getCurrentPosition(function (position){
    console.log(position)
    endereco = "https://maps.google.com/maps?q="+position.coords.latitude+","+position.coords.longitude+"&t=&z=18&ie=UTF8&iwloc=&output=embed";
    mapaFrame.setAttribute('src', endereco);

    mapaFrame.addEventListener('click',function(){
      carregaMarc()
    })

  },
    function(error){
    console.log("error")
  });

}
else{ alert("Ops, não foi possivel carregar")}



*/

