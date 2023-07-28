<?php

require_once('modelo/datos.php');

class departamentos extends datos{

	private $nfuncionario;
	private $departamentos;
	private $solicitud;
	private $fecha;

	function set_nfuncionario($valor){
	$this->nfuncionario = $valor; 
	}
	
	function set_departamentos($valor){
		$this->departamentos = $valor;
	}
	
	function set_solicitud($valor){
		$this->solicitud = $valor;
	}
	function set_fecha($valor){
		$this->fecha= $valor;
	}



	function get_nfuncionario(){
		return $this->nfuncionario;
	}
	
	function get_departamentos(){
		return $this->departamentos;
	}
	
	function get_solicitud(){
		return $this->solicitud;
	}
	
	function get_fecha(){
		return $this->fecha;
	}


	
	function incluir(){
		return "Usted va a incluir <br/>".$this->nfuncionario.
				"<br/>".$this->departamentos."<br/>".$this->solicitud."<br/>".$this->fecha;
	}
	
	function modificar(){
		return "Usted va a modificar <br/>".$this->nfuncionario.
				"<br/>".$this->departamentos."<br/>".$this->solicitud."<br/>".$this->fecha;
	}
	
	function eliminar(){
		return "Usted va a eliminar <br/>".$this->nfuncionario;
	}
	
}
?>