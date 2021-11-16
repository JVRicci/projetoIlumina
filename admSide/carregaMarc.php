<?php

session_start();
include ('../conexao.php');


$query = 'select latitude, longitude, status, descricao from pontos;';

$resultado = mysqli_query($conexao, $query) or die('Erro ao buscar registros');

$linha = mysqli_fetch_assoc($resultado);

$rows = mysqli_num_rows($resultado);

