<html>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title> Funcionarios </title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/seniat.png" rel="icon">
  <link href="assets/img/seniat.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

<div class="bg-danger p-2 text-white">
<div class="bg-dark" style="--bs-bg-opacity: .10;">
<?php require_once("comunes/boostrap.php"); ?>
</head>
<body>
<!--Div oculta para colocar el mensaje a mostrar-->
<div id="mensajes" style="display:none">
<?php
	if(!empty($mensaje)){
		echo $mensaje;
	}
?>	
</div>
<!--Llamada a archivo modal.php, dentro de el hay una sección modal-->
<?php require_once("comunes/modal.php"); ?>
<?php require_once('comunes/menu pest.php'); ?>
<section>
<br>	<br><br><br>
<div class="container"> <!-- todo el contenido ira dentro de esta etiqueta-->
<form method="post" action="" id="f">
<input type="text" name="accion" id="accion" style="display:none"/>
<div class="bg-dark p-2 text-white text-center">
<div class="bg-danger" style="--bs-bg-opacity: .10;">

<div class="container">
<br>
<form method="post" action="" id="f">
<center><h1>Funcionarios</h1></center>
<br>
<hr/>
</div>
<div class="container"> <!-- todo el contenido ira dentro de esta etiqueta-->
<form method="post" action="" id="f">
<input type="text" name="accion" id="accion" style="display:none"/>
<div class="container">
    <div class="row">
		<div class="col">
		   <h2><label for="cedula">Cedula del Funcionario</label></h2>
		   <input class="form-control" type="text" id="cedula" name="cedula" />
		   <span id="scedula"></span>
		</div>

		<div class="col">
		   <h2><label for="nombref">Nombre de Funcionario</label></h2>
		   <input class="form-control" type="text" id="nombref" name="nombref" />
		   <span id="snombref"></span>
		</div>

	</div>
<br>
    <div class="row">
		
		<div class="col">
		   <h2><label for="ndivision">Division</label></h2>
		   <input class="form-control" type="text" id="ndivision" name="ndivision" />
		   <span id="sndivision"></span>
		</div>
		<div class="col">
		   <h2><label for="fecha">Fecha enviado</label></h2>
		   <input class="form-control" type="date" id="fecha" name="fecha" />
		   <span id="sfecha"></span>
		</div>
	</div>
	
	
	
	<div class="row">
		<div class="col">
			<hr/>
		</div>
	</div>

	<div class="row">
		<div class="col">
			   <button type="button" class="btn btn-dark" id="incluir" name="incluir">INCLUIR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-dark" id="consultar" 
			   data-toggle="modal" data-target="#modal1" name="consultar">CONSULTAR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-dark" id="modificar" name="modificar">MODIFICAR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-dark" id="eliminar" name="eliminar">ELIMINAR</button>
		</div>
		<div class="col">	
			   <a href="." class="btn btn-dark">REGRESAR</a>
		</div>
	</div>
</div><br><br>
</form>
</div> <!-- fin de container -->
<!-- seccion del modal -->
<div class="modal fade" tabindex="-1" role="dialog"  id="modal1">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-header text-light bg-info">
        <h5 class="modal-title">Listado de Usuarios</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-content">
		<table class="table table-striped table-hover">
		<thead>
		  <tr>
			<th>Cedula</th>
			<th>Usuario</th>
			<th>Clave</th>
		  </tr>
		</thead>
		<tbody>
		  <tr>
			<td>12345678</td>
			<td>Pedro</td>
			<td>******</td>
		  </tr>
		  <tr>
			<td>77777777</td>
			<td>Maria</td>
			<td>*******</td>
		  </tr>
		  <tr>
			<td>99999999</td>
			<td>Tanos</td>
			<td>*******</td>
		  </tr>
		</tbody>
		</table>
    </div>
	<div class="modal-footer bg-light">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>
<!--fin de seccion modal-->
</section>
<!--Llamada a las librerias de javascript para las validaciones de esta pagina -->
<script type="text/javascript" src="js/funcionariosjs.js"></script>
</body><br><br><br><br>
</html>