<?php

define ('HOST', 'localhost');
define ('USUARIO', 'root');
define ('SENHA', '');
define ('DB', 'bancoilumina');


$conexao=mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possivel se conectar');

