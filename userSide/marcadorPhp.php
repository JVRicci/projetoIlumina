<?php
session_start();

include ('../conexao.php');

$estadoCap = filter_input(INPUT_POST, 'estadoRadio');

$usuario = mysqli_real_escape_string($conexao, $_POST['usuario']);
$latitude = mysqli_real_escape_string($conexao, $_POST['latLabel']);
$longitude = mysqli_real_escape_string($conexao, $_POST['longLabel']);
$estado = $_POST['estadoRadio'];
$comentario = mysqli_real_escape_string($conexao, $_POST['comentario']);


if($estadoCap == "" ||  $comentario == "" ){
        
        header('Location: .\carregaMapa.html');
}

else{
$query = "INSERT INTO pontos (  latitude, longitude, status, descricao) 
        VALUES ( '{$latitude}', '{$longitude}', '{$estado}', '{$comentario}');";

        $resultado = mysqli_query($conexao, $query) or die ('Erro ao tentar cadastrar');

        
        header('Location: .\carregaMapa.html');
}


exit();
