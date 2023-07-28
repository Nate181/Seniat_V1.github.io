
$(document).ready(function(){


    if($.trim($("#mensajes").text()) != ""){
        muestraMensaje($("#mensajes").html());
    }
 	
    
    $("#nfuncionario").on("keypress",function(e){
		validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/,e);
	});
	
	$("#nfuncionario").on("keyup",function(){
		validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,15}$/,
		$(this),$("#snfuncionario"),"Solo letras entre 3 y 15 caracteres");
	});

    $("#departamento").on("keypress",function(e){
		validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/,e);
	});
	
	$("#departamento").on("keyup",function(){
		validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,15}$/,
		$(this),$("#sdepartamento"),"Solo letras entre 3 y 15 caracteres");
	});

	$("#solicitud").on("keypress",function(e){
        validarkeypress(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
    });
    
    $("#solicitud").on("keyup",function(){
        validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,20}$/,
        $(this),$("#ssolicitud"),"Solo letras y/o numeros entre 6 y 20 caracteres");
    });

    $("#fecha").on("keypress",function(e){
		validarkeypress(/^[0-9\b-]*$/,e);
	});
	
	$("#fecha").on("keyup",function(){
	    validarkeyup(/^[0-9]{4}[-]{1}[0-9]{7,8}$/,$(this),$("#sfecha"),"El formato debe ser solo numeros");
	});

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
        if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,12}$/,$("#descripcion"),
            $("#sdescripcion"),"El formato debe ser letras de 6 a 12")==0){
            muestraMensaje("La descripcion debe coincidir con el formato <br/>"+ 
                            "entre 6 y 12 letras");	
            
        }
        else{	
            $("#accion").val("eliminar");	
            $("#f").submit();
        }
        
    });
        
    });
    
    function validarenvio(){
        if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,12}$/,$("#descripcion"),
            $("#sdescripcion"),"El formato debe ser de 6 a 12")==0){
            muestraMensaje("La descripcion debe coincidir con el formato <br/>"+ 
                            "entre 6 y 12 letras");	
            return false;					
        }	
        else if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,12}$/,
            $("#nombref"),$("#snombref"),"Solo letras y/o numeros y/o # - entre 6 y 12 caracteres")==0){
            muestraMensaje("Nombref <br/>Solo letras y/o numeros y/o # - entre 6 y 12 caracteres");
            return false;
        }
        else if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,12}$/,
            $("#diagnostico"),$("#sdiagnostico"),"Solo letras y/o numeros y/o # - entre 6 y 12 caracteres")==0){
            muestraMensaje("diagnostico <br/>Solo letras y/o numeros y/o # - entre 6 y 12 caracteres");
            return false;
        }
        else if(validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,12}$/,
            $("#fallas"),$("#sfallas"),"Solo letras y/o numeros y/o # - entre 6 y 12 caracteres")==0){
            muestraMensaje("fallas <br/>Solo letras y/o numeros y/o # - entre 6 y 12 caracteres");
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