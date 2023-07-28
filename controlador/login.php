<?php

if (!is_file("modelo/".$pagina.".php")){
	echo "Falta definir la clase ".$pagina;
	exit;
}  
  require_once('modelo/login.php');

  if(is_file("vista/".$pagina.".php")){

	 
	  $o = new loginjs(); 
	  if(isset($_POST['accion'])){
		  
		 
		  $o->set_correous($_POST['correous']);
		  $o->set_contraseñaus($_POST['contraseñaus']);

		  $accion = $_POST['accion'];
		  if($accion=='incluir'){
			$mensaje =  $o->incluir();
		  }
		  elseif($accion=='modificar'){
			$mensaje =  $o->modificar();
			
		  }
		  elseif($accion=='eliminar'){
			$mensaje =  $o->eliminar();
			
		  }
	  }
	  
	  require_once("vista/".$pagina.".php"); 
  }
  else{
	  echo "pagina en construccion";
  }
?>
