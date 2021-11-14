
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

      const myLatLng = { 
        lat: position.coords.latitude, 
        lng: position.coords.latitude 
        
      };
      
      var mapOptions = {
        center: {
          lat: position.coords.latitude, 
          lng: position.coords.longitude
        },
        zoom: 13,
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

      //var imagem = "icones/bolinha vermelha.png"
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
