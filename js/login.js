$(document).ready(function(){

	if($.trim($("#mensajes").text()) != ""){
		muestraMensaje($("#mensajes").html());
	}
	
		$("#correous").on("keypress",function(e){
			validarkeypress(/^[A-Za-z0-9@,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
		});
		
		$("#correous").on("keyup",function(){
			validarkeyup(/^[A-Za-z0-9@,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,8}$/,
			$(this),$("#scorreous"),"Ingrese su correo electronico.");
		});
		$("#contraseñaus").on("keypress",function(e){
			validarkeypress(/^[A-Za-z0-9@,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
		});
		
		$("#contraseñaus").on("keyup",function(){
			validarkeyup(/^[A-Za-z0-9@,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,8}$/,
			$(this),$("#scontraseñaus"),"Ingrese su contraseña.");
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
		if(validarkeyup(/^[0-9]{0,8}$/,$("#correous"),
			$("#scedula"),"El formato debe ser tener entre 0 y 12 digitos.")==0){
			muestraMensaje("Desea eliminar este correo <br/>"+ 
							"Seguro?");	
			
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
		if(validarkeyup(/^[0-9]{7,8}$/,$("#correous"),
			$("#scorreous"),"El correo no esta registrado")==0){
			muestraMensaje("El correo no esta registrado<br/>"+ 
							"entre 0 y 8 digitos");	
			return false;					
		}	
		else if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{0,9}$/,
			$("#contraseñaus"),$("#scontraseñaus"),"La contraseña no es correcta")==0){
			muestraMensaje("Nombre <br/>La contraseña no es correcta");
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