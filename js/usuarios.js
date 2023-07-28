$(document).ready(function(){

	//Seccion para mostrar lo enviado en el modal mensaje//
	
	//Función que verifica que exista algo dentro de un div
	//oculto y lo muestra por el modal
	if($.trim($("#mensajes").text()) != ""){
		muestraMensaje($("#mensajes").html());
	}
	//Fin de seccion de mostrar envio en modal mensaje//	
		
	//VALIDACION DE DATOS	
		$("#cedula").on("keypress",function(e){
			validarkeypress(/^[0-9-\b]*$/,e);
		});
		
		$("#cedula").on("keyup",function(){
			validarkeyup(/^[0-9]{0,8}$/,$(this),
			$("#scedula"),"El formato debe ser tener entre 0 y 8 digitos.");
		});
		
		
		$("#nombre").on("keypress",function(e){
			validarkeypress(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
		});
		
		$("#nombre").on("keyup",function(){
			validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,6}$/,
			$(this),$("#snombre"),"Solo letras y numeros, entre 0 y 9 caracteres.");
		});
		
		$("#apellido").on("keypress",function(e){
			validarkeypress(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
		});
		
		$("#apellido").on("keyup",function(){
			validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,6}$/,
			$(this),$("#sapellido"),"Solo letras y numeros, entre 0 y 9 caracteres.");
		});
	
		$("#especialidad").on("keypress",function(e){
			validarkeypress(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
		});
		
		$("#especialidad").on("keyup",function(){
			validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,10}$/,
			$(this),$("#sespecialidad"),"Solo letras y numeros, entre 0 y 9 caracteres.");
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