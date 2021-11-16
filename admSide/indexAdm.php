<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>

        <script src='js/mapAdm.js' type='text/javascript' rel='script'></script>
        <link rel="stylesheet" href='css/estiloAdm.css' rel='style'>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous">

        <title>
            Page ADM
        </title>
    </head>
    <body >


        <div class="animation-area">
          <ul class="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
              
        <table class="darkTable" name="registros" id='registrosTable' style="
          position: fixed;
          top: 20%;
          left: 5%;">
          <thead>
          <tr >
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Status</th>
          <th>Descrição</th>
          </tr>
          </thead>
          <tbody>

            <?php 

              include ('carregaMarc.php');
              // se i número de resultads for maior que zero, mostra info
              if ($rows > 0){

                do{

            ?>
          <tr >
          <td id="latitudeTd"><?= $linha['latitude'] ?></td>
          <td id="longitudeTd"><?= $linha['longitude'] ?></td>
          <td id="statusTd"><?= $linha['status'] ?></td>
          <td id="descricaoTd"><?= $linha['descricao'] ?></td>
          <td id="marcTd">
            <button id='marcBt' style="height: 25px; width: 25px;" onclick="pegaIndex()">
          </td>
          <?php 
          
          }while($linha = mysqli_fetch_assoc($resultado)); 
          
          }
          ?>
          </tr>
          </tbody>
          </table>


    
        <h1 class="tituloPagina">Pontos de Iluminação</h1> 
    
        <div class="gmap_canvas" id="map">
          
        </div>
        <script src='js/mapAdm.js'>   </script>
        <script 
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhMnpZ4MbL0aMfSN9Mtou0spemSKRYPYQ&callback=initMap" 
          >
          </script>
    
            
          <button id="carregaMarc"  class="btn btn-primary">Finalizar</button>
    
            
          </div>
      </body>
    </html>
