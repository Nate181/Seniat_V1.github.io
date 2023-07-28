<html>
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title> Iniciar sesion </title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <link href="assets/img/seniat.png" rel="icon">
  <link href="assets/img/seniat.png" rel="apple-touch-icon">

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

<?php require_once("comunes/boostrap.php"); ?>
</head>
<body>

<div class="bg-danger p-2 text-white">
<div class="bg-dark" style="--bs-bg-opacity: .10;">
<?php require_once('comunes/menu pest.php'); ?>

<section class="vh-100" style="background-color: danger;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="assets/img/Torre2.jpg" alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 2rem; " />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>
                <center><img src="assets/img/seniat3.png" class="" alt="" style="width: 250px;"></center>
               <br>
                     <center><h4 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Iniciar sesion</h4></center>

        <div class="row">
        <div class="col">
		  
        <label for="correous">Correo electronico</label>
		   <input class="form-control" type="email" id="correous" name="correo" />
		   <span id="scorreous"></span>
		
        </div>
		</div> 

        <br>

        <div class="row">
        <div class="col">

		   <label for="contraseñaus">Contraseña</label>
		   <input class="form-control" type="text" id="contraseñaus" name="contraseña" />
		   <span id="scontraseñaus"></span>

		</div>

	</div>
                <br><br>
                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" id="incluir" type="button">Siguiente</button>
                  </div>

                  <center><h5><a class="small text-muted" href="#!">¿Has olvidado tu contraseña?</a></h5></center>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">¿No posee cuenta? 
                  <a href="?pagina=registro" style="color: #393f81;">Registrar aqui</a></p>
                  <a href="#!" class="small text-muted">Terminos de uso.</a>
                  <a href="#!" class="small text-muted">Politica de privacidad.</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<script type="text/javascript" src="js/login.js"></script>
<link href="assets/css/login.css" rel="stylesheet">
<br><br>
</body>
</html>

