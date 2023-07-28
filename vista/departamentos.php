<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title> Departamentos </title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <link href="assets/img/seniat.png" rel="icon">
  <link href="assets/img/seniat.png" rel="apple-touch-icon">

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

<div class="bg-danger p-2 text-white">
<div class="bg-dark" style="--bs-bg-opacity: .10;">
<?php require_once("comunes/boostrap.php"); ?>
</head>
<body>

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
<form method="post" action="" id="f"><br>
<center><h1>Departamentos</h1></center>
<hr/>
</div>
<section>
<div class="container">
	<div class="container">
		<ul class="nav nav-tabs" role="tablist">
		  <li class="nav-item">
			<a class="nav-link active" href="#factura" role="tab" data-toggle="tab">Registro</a>
		  </li>
		  
		</ul>
	</div>

	<div class="tab-content">
	<div role="tabpanel" class="tab-pane active" id="factura">
		<br>
		   <div class="container">
		<br>
				<div class="row">
					<div class="col">
					   <label for="nfuncionario">Nº de funcionario</label>
					   <input class="form-control" type="text" id="nfuncionario" name="nfuncionario" />
					   <span id="snfuncionario"></span>
					</div>
					
					<div class="col">
		<div class="container">
					   <label for="departamentos">Departamentos</label>
					   <label for="select"></label>
					   <select class="form-control" id="departamentos" name="departamentos">
					   
						<option>Dirección</option>
						<option>Gerencia general de desarrollo tributario</option>
						<option>Gerencia de recaudación</option>
						<option>Gerencias de aduanas</option>
						<option>Gerencia de fiscalización</option>
						<option>Gerencia jurídica tributaria</option>
						<option>Gerencia de estudios económicos tributarios</option>
						<option>Gerencia general de informática</option>
						<option>Gerencia de planificación y tecnología</option>
						<option>Gerencia de dotación</option>
						<option>Gerencia de mantenimiento</option>
						<option>Gerencia general de administración</option>
						<option>Gerencia financiera administrativa</option>
						<option>Gerencia regional de atributos internos</option>
						<option>Gerencia regional de tributos internos</option>
						<option>Sectores de tributos internos</option>
						<option>Unidades de tributos internos</option>
						<option>Gerencia de aduanas principales</option>
					   <span id="sdepartamentos"></span>
					   </select>
					</div>
        </div>
				</div>
				<br>
				<div class="row">
				<div class="col">
					   <label for="solicitud">Solicitud</label>
					   <input class="form-control" type="text" id="solicitud" name="solicitud" />
					   <span id="ssolicitud"></span>
					</div>
					<div class="col">
					   <label for="fecha">Fecha</label>
					   <input class="form-control" type="date" id="fecha" name="fecha" />
					</div>
				</div> 
				
		</div>
		</div>
	</div>
	
<br><br>
</div> <!-- fin de container -->
<div class="container">
	<div class="row">
			<div class="col">
				<hr/>
			</div>
	</div>

	<div class="row">
		<div class="col">
			   <button type="button" class="btn btn-light" id="incluir" name="incluir">INCLUIR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-light" id="consultar" 
			   data-toggle="modal" data-target="#modal1" name="consultar">CONSULTAR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-light" id="modificar" name="modificar">MODIFICAR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-light" id="eliminar" name="eliminar">ELIMINAR</button>
		</div>
		<div class="col">	
			   <a href="." class="btn btn-light">REGRESAR</a>
		</div>
	</div>
</div>
<br><br>
<script type="text/javascript" src="js/departamentos.js"></script>
</section>
</section>
</body>
</html>