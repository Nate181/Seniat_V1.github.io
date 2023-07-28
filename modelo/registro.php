<?php

require_once('modelo/datos.php');

class registrojs extends datos{
	
	private $cedulaus; 
	private $nombreus;
	private $apellidous;
	private $correous;
	private $contraseñaus;
	
	function set_cedulaus($valor){
		$this->cedulaus = $valor; 

	}
	
	function set_nombreus($valor){
		$this->nombreus = $valor;
	}
	
	function set_apellidous($valor){
		$this->apellidous = $valor;
	}
	function set_correus($valor){
		$this->correous= $valor;
	}
	
	
	function get_cedulaus(){
		return $this->cedulaus;
	}
	
	function get_nombreus(){
		return $this->nombreus;
	}
	
	function get_apellidous(){
		return $this->apellidous;
	}
	
	function get_correus(){
		return $this->correous;
	}

	function get_contraseñaus(){
		return $this->correous;
	}
	
	function incluir(){

		return "Usted va a incluir <br/>".$this->cedulaus.
				"<br/>".$this->nombreus."<br/>".$this->apellidous."<br/>".$this->correous;
	}
	
	function modificar(){

		return "Usted va a modificar <br/>".$this->cedulaus.
				"<br/>".$this->nombreus."<br/>".$this->apellidous."<br/>".$this->correous;
	}
	
	function eliminar(){
		
		return "Usted va a eliminar <br/>".$this->cedulaus;
	}
	
}
?>