<?php

if (!is_file("modelo/".$pagina.".php")){
	echo "Falta definir la clase ".$pagina;
	exit;
}  
  require_once('modelo/registro.php');

  if(is_file("vista/".$pagina.".php")){

	 
	  $o = new registrojs(); 
	  if(isset($_POST['accion'])){
		  
		 
		  $o->set_cedulaus($_POST['cedulaus']);
		  $o->set_nombreus($_POST['nombreus']);
		  $o->set_apellidous($_POST['apellidous']);
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
