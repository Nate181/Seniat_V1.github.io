<?php
  
//llamada al archivo que contiene la clase
//usuarios, en ella estara el codigo que me //permitirá
//guardar, consultar y modificar dentro de mi base //de datos

//lo primero que se debe hacer es verificar al //igual que en la vista que exista el archivo
if (!is_file("modelo/".$pagina.".php")){
	//alli pregunte que si no es archivo se niega //con !
	//si no existe envio mensaje y me salgo
	echo "Falta definir la clase ".$pagina;
	exit;
}  
  require_once('modelo/funcionariosjs.php');

  if(is_file("vista/".$pagina.".php")){
	  
	  //bien si estamos aca es porque existe la //vista y la clase
	  //por lo que lo primero que debemos hace es //realizar una instancia de la clase
	  //instanciar es crear una variable local, //que contiene los metodos de la clase
	  //para poderlos usar
	  
	  $o = new funcionariosjs(); //ahora nuestro objeto //se llama $o y es una copia en memoria de la
	  //clase usuarios
	  
	  if(isset($_POST['accion'])){
		  
		  //como ya sabemos si estamos aca es //porque se recibio alguna informacion
		  //de la vista, por lo que lo primero que //debemos hacer ahora que tenemos una 
		  //clase es guardar esos valores en ella //con los metodos set
		  
		  $o->set_cedula($_POST['cedula']);
		  $o->set_nombref($_POST['nombref']);
		  $o->set_ndivision($_POST['ndivision']);
		  $o->set_fecha($_POST['fecha']);
		  
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
