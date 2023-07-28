
$(document).ready(function(){

    //Seccion para mostrar lo enviado en el modal mensaje//
    
    //Función que verifica que exista algo dentro de un div
    //oculto y lo muestra por el modal
    if($.trim($("#mensajes").text()) != ""){
        muestraMensaje($("#mensajes").html());
    }
    //Fin de seccion de mostrar envio en modal mensaje//	
        
    //VALIDACION DE DATOS	
    $("#idequipo").on("keypress",function(e){
		validarkeypress(/^[0-9\b-]*$/,e);
	});
	
	$("#idequipo").on("keyup",function(){
	    validarkeyup(/^[0-9]{4}[-]{1}[0-9]{7,8}$/,$(this),$("#sidequipo"),"El formato debe ser solo numeros");
	});
        
        
    $("#marca").on("keypress",function(e){
		validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/,e);
	});
	
	$("#marca").on("keyup",function(){
		validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,15}$/,
		$(this),$("#smarca"),"Solo letras entre 3 y 15 caracteres");
	});
        
    $("#modelo").on("keypress",function(e){
        validarkeypress(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]*$/,e);
    });
    
    $("#modelo").on("keyup",function(){
        validarkeyup(/^[A-Za-z0-9,#\b\s\u00f1\u00d1\u00E0-\u00FC-]{6,20}$/,
        $(this),$("#smodelo"),"Solo letras y/o numeros entre 6 y 20 caracteres");
    });
    
    $("#estatus").on("keypress",function(e){
		validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/,e);
	});
	
	$("#estatus").on("keyup",function(){
		validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,280}$/,
		$(this),$("#sestatus"),"Solo letras a partir de 3 caracteres");
	});

    $("#numBien").on("keypress",function(e){
		validarkeypress(/^[0-9\b-]*$/,e);
	});
	
	$("#numBien").on("keyup",function(){
	    validarkeyup(/^[0-9]{4}[-]{1}[0-9]{7,8}$/,$(this),$("#snumBien"),"El formato debe ser solo numeros");
	});

    $("#tipo").on("keypress",function(e){
		validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/,e);
	});
	
	$("#tipo").on("keyup",function(){
		validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,15}$/,
		$(this),$("#stipo"),"Solo letras entre 3 y 15 caracteres");
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
    //FIN DE CONTROL DE BOTONES	
    
    
        
        
    });
    
    //Validación de todos los campos antes del envio
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