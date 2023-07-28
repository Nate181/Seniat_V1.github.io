<?php
//llamda al archivo que contiene la clase
//datos, en ella posteriormente se colcora el codigo
//para enlazar a su base de datos
require_once('modelo/datos.php');

//declaracion de la clase usuarios que hereda de la clase datos
//la herencia se declara con la palabra extends y no es mas 
//que decirle a esta clase que puede usar los mismos metodos
//que estan en la clase de dodne hereda (La padre) como sir fueran de el

class funcionariosjs extends datos{
	//el primer paso dentro de la clase
	//sera declarar los atributos (variables) que describen la clase
	//para nostros no es mas que colcoar los inputs (controles) de
	//la vista como variables aca
	//cada atributo debe ser privado, es decir, ser visible solo dentro de la
	//misma clase, la forma de colcoarlo privado es usando la palabra private
	
	private $cedula; //recuerden que en php, las variables no tienen tipo predefinido
	private $nombref;
	private $ndivision;
	private $fecha;
	//Ok ya tenemos los atributos, pero como son privados no podemos acceder a ellos desde fueran
	//por lo que debemos colcoar metodos (funciones) que me permitan leer (get) y colocar (set)
	//valores en ello, esto es  muy mal llamado geters y seters por si alguien se los pregunta
	
	function set_cedula($valor){
		$this->cedula = $valor; //fijencen como se accede a los elementos dentro de una clase
		//this que singnifica esto es decir esta clase luego -> simbolo que indica que apunte
		//a un elemento de this, es decir esta clase
		//luego el nombre del elemento sin el $
	}
	//lo mismo que se hizo para cedula se hace para usuario y clave
	
	function set_nombref($valor){
		$this->nombref = $valor;
	}
	
	function set_ndivision($valor){
		$this->ndivision = $valor;
	}
	function set_fecha($valor){
		$this->fecha= $valor;
	}
	
	//ahora la misma cosa pero para leer, es decir get
	
	function get_cedula(){
		return $this->cedula;
	}
	
	function get_nombref(){
		return $this->nombref;
	}
	
	function get_ndivision(){
		return $this->ndivision;
	}
	
	function get_fecha(){
		return $this->fecha;
	}
	//Lo siguiente que demos hacer es crear los metodos para incluir, consultar y eliminar
	
	function incluir(){
		//aca iran las instrucciones sql, por lo pronto solo retornaremos un mensaje
		return "Usted va a incluir <br/>".$this->cedula.
				"<br/>".$this->nombref."<br/>".$this->ndivision."<br/>".$this->fecha;
	}
	
	function modificar(){
		//aca iran las instrucciones sql, por lo pronto solo retornaremos un mensaje
		return "Usted va a modificar <br/>".$this->cedula.
				"<br/>".$this->nombref."<br/>".$this->ndivision."<br/>".$this->fecha;
	}
	
	function eliminar(){
		//aca iran las instrucciones sql, por lo pronto solo retornaremos un mensaje
		return "Usted va a eliminar <br/>".$this->cedula;
	}
	
}
?>