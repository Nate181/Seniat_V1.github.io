<?php
  

if (!is_file("modelo/".$pagina.".php")){

  echo "Falta definir la clase ".$pagina;
  exit;
}  
  require_once('modelo/departamentos.php');

  if(is_file("vista/".$pagina.".php")){
    
    
    $o = new departamentos();
    
    if(isset($_POST['accion'])){
      
      
      $o->set_nfuncionario($_POST['nfuncionario']);
      $o->set_departamentos($_POST['departamentos']);
      $o->set_solicitud($_POST['solicitud']);
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