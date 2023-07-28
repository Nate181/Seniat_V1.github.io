<?php

if (!is_file("modelo/".$pagina.".php")){
	echo "Falta definir la clase ".$pagina;
	exit;
}  
  require_once('modelo/usuarios.php');

  if(is_file("vista/".$pagina.".php")){
	  
	 
	  $o = new usuariosjs(); 
	  if(isset($_POST['accion'])){
		  
		 
		  $o->set_cedula($_POST['cedula']);
		  $o->set_nombre($_POST['nombre']);
		  $o->set_apellido($_POST['apellido']);
		  $o->set_especialidad($_POST['especialidad']);
		  
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
