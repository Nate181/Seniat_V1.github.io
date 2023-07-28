$(document).ready(function(){

	//Seccion para mostrar lo enviado en el modal mensaje//
	
	//Función que verifica que exista algo dentro de un div
	//oculto y lo muestra por el modal
	if($.trim($("#mensajes").text()) != ""){
		muestraMensaje($("#mensajes").html());
	}
	//Fin de seccion de mostrar envio en modal mensaje//	
		
	//VALIDACION DE DATOS	
		$("#cedulaus").on("keypress",function(e){
			validarkeypress(/^[0-9-\b]*$/,e);
		});
		
		$("#cedulaus").on("keyup",function(){
			validarkeyup(/^[0-9]{0,8}$/,$(this),
			$("#scedulaus"),"El formato debe ser tener entre 0 y 8 digitos.");
		});
		
		
		$("#nombreus").on("keypress",function(e){
			validarkeypress(/^[A-Za-z,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
		});
		
		$("#nombreus").on("keyup",function(){
			validarkeyup(/^[A-Za-z,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,5}$/,
		
			$(this),$("#snombreus"),"Solo letras.");
		});
		
		$("#apellidous").on("keypress",function(e){
			validarkeypress(/^[A-Za-z,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
		});
		
		$("#apellidous").on("keyup",function(){
			validarkeyup(/^[A-Za-z,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,5}$/,
			$(this),$("#sapellidous"),"Solo letras.");
		});
	
		$("#correous").on("keypress",function(e){
			validarkeypress(/^[A-Za-z0-9@,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
		});
		
		$("#correous").on("keyup",function(){
			validarkeyup(/^[A-Za-z0-9@,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,8}$/,
			$(this),$("#scorreous"),"Solo letras y numeros, entre 0 y 9 caracteres.");
		});
		
		$("#contraseñaus").on("keypress",function(e){
			validarkeypress(/^[A-Za-z0-9@,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
		});
		
		$("#contraseñaus").on("keyup",function(){
			validarkeyup(/^[A-Za-z0-9@,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,8}$/,
			$(this),$("#scontraseñaus"),"Solo letras y numeros, entre 0 y 9 caracteres.");
		});
		
		
	//FIN DE VALIDACION DE DATOS
	
	//CONTROL DE BOTONES
	
	$("#incluir").on("click",function(){
		if(validarenvio()){
			$("#accion").val("incluir");	
			$("#f").submit();
		}
	});
	$("#modificar").on("click",function(){
		if(validarenvio()){
			$("#accion").val("modificar");	
			$("#f").submit();
		}
	});
	$("#eliminar").on("click",function(){
		if(validarkeyup(/^[0-9]{0,8}$/,$("#cedula"),
			$("#scedula"),"El formato debe ser tener entre 0 y 8 digitos.")==0){
			muestraMensaje("La cedula debe coincidir con el formato <br/>"+ 
							"entre 0 y 8 digitos");	
			
		}
		else{	
			$("#accion").val("eliminar");	
			$("#f").submit();
		}
		
	});
	//FIN DE CONTROL DE BOTONES	
	
	
		
		
	});
	
	//Validación de todos los campos antes del envio
	function validarenvio(){
		if(validarkeyup(/^[0-9]{7,8}$/,$("#cedula"),
			$("#scedula"),"El formato debe tener entre 0 y 8 digitos")==0){
			muestraMensaje("La cedula debe coincidir con el formato <br/>"+ 
							"entre 0 y 8 digitos");	
			return false;					
		}	
		else if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,9}$/,
			$("#nombre"),$("#snombre"),"Solo letras y numeros, entre 0 y 9 caracteres")==0){
			muestraMensaje("Nombre <br/>Solo letras y numeros, entre 0 y 9 caracteres");
			return false;
		}
		else if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,9}$/,
			$("#apellido"),$("#sapellido"),"Solo letras y numeros, entre 0 y 9 caracteres")==0){
			muestraMensaje("apellido <br/>Solo letras y numeros, entre 0 y 9 caracteres");
			return false;
		}
		else if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,9}$/,
			$("#especialidad"),$("#sespecialidad"),"Solo letras y numeros, entre 0 y 9 caracteres")==0){
			muestraMensaje("especialidad <br/>Solo letras y numeros, entre 0 y 9 caracteres");
			return false;
		}
		return true;
	}
	
	
	//Funcion que muestra el modal con un mensaje
	function muestraMensaje(mensaje){
		
		$("#contenidodemodal").html(mensaje);
				$("#mostrarmodal").modal("show");
				setTimeout(function() {
						$("#mostrarmodal").modal("hide");
				},5000);
	}
	
	
	//Función para validar por Keypress
	function validarkeypress(er,e){
		
		key = e.keyCode;
		
		
		tecla = String.fromCharCode(key);
		
		
		a = er.test(tecla);
		
		if(!a){
		
			e.preventDefault();
		}
		
		
	}
	//Función para validar por keyup
	function validarkeyup(er,etiqueta,etiquetamensaje,
	mensaje){
		a = er.test(etiqueta.val());
		if(a){
			etiquetamensaje.text("");
			return 1;
		}
		else{
			etiquetamensaje.text(mensaje);
			return 0;
		}
	}