<?php
//llamda al archivo que contiene la clase
//datos, en ella posteriormente se colcora el codigo
//para enlazar a su base de datos
require_once('modelo/datos.php');

//declaracion de la clase usuarios que hereda de la clase datos
//la herencia se declara con la palabra extends y no es mas 
//que decirle a esta clase que puede usar los mismos metodos
//que estan en la clase de dodne hereda (La padre) como sir fueran de el

class equiposjs extends datos{
	//el primer paso dentro de la clase
	//sera declarar los atributos (variables) que describen la clase
	//para nostros no es mas que colcoar los inputs (controles) de
	//la vista como variables aca
	//cada atributo debe ser privado, es decir, ser visible solo dentro de la
	//misma clase, la forma de colcoarlo privado es usando la palabra private
	
	private $idequipo; //recuerden que en php, las variables no tienen tipo predefinido
	private $marca;
	private $modelo;
	private $estatus;
	private $numBien;
	private $tipo;
	//Ok ya tenemos los atributos, pero como son privados no podemos acceder a ellos desde fueran
	//por lo que debemos colcoar metodos (funciones) que me permitan leer (get) y colocar (set)
	//valores en ello, esto es  muy mal llamado geters y seters por si alguien se los pregunta
	
	function set_idequipo($valor){
		$this->idequipo = $valor; //fijencen como se accede a los elementos dentro de una clase
		//this que singnifica esto es decir esta clase luego -> simbolo que indica que apunte
		//a un elemento de this, es decir esta clase
		//luego el nombre del elemento sin el $
	}
	//lo mismo que se hizo para cedula se hace para usuario y clave
	
	function set_marca($valor){
		$this->marca = $valor;
	}
	
	function set_modelo($valor){
		$this->modelo = $valor;
	}
	function set_estatus($valor){
		$this->estatus= $valor;
	}
	function set_numBien($valor){
		$this->numBien = $valor;
	}
	function set_tipo($valor){
		$this->tipo= $valor;
	}
	
	//ahora la misma cosa pero para leer, es decir get
	
	function get_idequipo(){
		return $this->idequipo;
	}
	
	function get_marca(){
		return $this->marca;
	}
	
	function get_modelo(){
		return $this->diagnostico;
	}
	
	function get_estatus(){
		return $this->estatus;
	}
	function get_numBien(){
		return $this->numBien;
	}
	function get_tipo(){
		return $this->tipo;
	}
	//Lo siguiente que demos hacer es crear los metodos para incluir, consultar y eliminar
	
	function incluir(){
		//aca iran las instrucciones sql, por lo pronto solo retornaremos un mensaje
		return "Usted va a incluir <br/>".$this->idequipo.
				"<br/>".$this->marca."<br/>".$this->modelo."<br/>".$this->estatus."<br/>".$this->numBien."<br/>".$this->tipo;
	}
	
	function modificar(){
		//aca iran las instrucciones sql, por lo pronto solo retornaremos un mensaje
		return "Usted va a modificar <br/>".$this->idequipo.
				"<br/>".$this->marca."<br/>".$this->modelo."<br/>".$this->estatus."<br/>".$this->numBien."<br/>".$this->tipo;
	}
	
	function eliminar(){
		//aca iran las instrucciones sql, por lo pronto solo retornaremos un mensaje
		return "Usted va a eliminar <br/>".$this->idequipo;
	}
	
}
?>