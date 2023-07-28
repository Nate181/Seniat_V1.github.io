
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
		validarkeyup(/^[0-9]{7,8}$/,$(this),
		$("#scedula"),"El formato debe ser tener entre 0 y 8 digitos.");
	});
        
        
        $("#nombref").on("keypress",function(e){
            validarkeypress(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,e);
        });
        
        $("#nombref").on("keyup",function(){
            validarkeyup(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{6,20}$/,
            $(this),$("#snombref"),"Solo letras - entre 6 y 20 caracteres");
        });
        
        $("#ndivision").on("keypress",function(e){
            validarkeypress(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,e);
        });
        
        $("#ndivision").on("keyup",function(){
            validarkeyup(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{6,12}$/,
            $(this),$("#sndivision"),"Solo letras y/o numeros y/o # - entre 6 y 12 caracteres");
        });
    
        $("#fecha").on("keypress",function(e){
            validarkeypress(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
        });
        
        $("#fecha").on("keyup",function(){
            validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,12}$/,
            $(this),$("#sfecha"),"Solo fecha - entre 6 y 12 caracteres");
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
        if(validarkeyup(/^[0-9]{7,8}$/,$("#cedula"),
            $("#scedula"),"El formato debe ser tener entre 0 y 8 digitos.")==0){
            muestraMensaje("La cedula debe coincidir con el formato <br/>"+ 
                            "entre 0 y 8 digitos.");	
            
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
		$("#scedula"),"El formato debe ser tener entre 0 y 8 digitos.")==0){
	    muestraMensaje("La cedula debe coincidir con el formato <br/>"+ 
						"entre 0 y 8 digitos");
            return false;					
        }	
        else if(validarkeyup(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{6,20}$/,
            $("#nombref"),$("#snombref"),"Solo letras - entre 6 y 20 caracteres")==0){
            muestraMensaje("Nombref <br/>Solo letras - entre 6 y 20 caracteres");
            return false;
        }
        else if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,12}$/,
            $("#ndivision"),$("#sndivision"),"Solo letras y/o numeros y/o # - entre 6 y 12 caracteres")==0){
            muestraMensaje("division <br/>Solo letras y/o numeros y/o # - entre 6 y 12 caracteres");
            return false;
        }
        else if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,12}$/,
            $("#fecha"),$("#sfecha"),"Solo letras y/o numeros y/o # - entre 6 y 12 caracteres")==0){
            muestraMensaje("fecha <br/>Solo letras y/o numeros y/o # - entre 6 y 12 caracteres");
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