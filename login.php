<?php
session_start();
include('conexao.php');

if(empty($_POST['login']) || empty($_POST['senha'])){
    header('Location: index.html');
    exit();
}

$login = mysqli_real_escape_string($conexao, $_POST['login']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

$query = "select login, senha from  users where login = '{$login}' and senha= '{$senha}';";


$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);

if($row == 1){
    $_SESSION['login'] = $login;
    header('Location: userSide/carregaMapa.html');
    exit();
}
else{
    header('Location: index.html');
    exit();
}


