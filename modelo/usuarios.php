<?php

require_once('modelo/datos.php');

class usuariosjs extends datos{
	
	private $cedula; 
	private $nombre;
	private $apellido;
	private $especialidad;
	
	function set_cedula($valor){
		$this->cedula = $valor; 

	}
	
	function set_nombre($valor){
		$this->nombre = $valor;
	}
	
	function set_apellido($valor){
		$this->apellido = $valor;
	}
	function set_especialidad($valor){
		$this->especialidad= $valor;
	}
	
	
	function get_cedula(){
		return $this->cedula;
	}
	
	function get_nombre(){
		return $this->nombre;
	}
	
	function get_apellido(){
		return $this->apellido;
	}
	
	function get_especialidad(){
		return $this->especialidad;
	}
	
	function incluir(){

		return "Usted va a incluir <br/>".$this->cedula.
				"<br/>".$this->nombre."<br/>".$this->apellido."<br/>".$this->especialidad;
	}
	
	function modificar(){

		return "Usted va a modificar <br/>".$this->cedula.
				"<br/>".$this->nombre."<br/>".$this->apellido."<br/>".$this->especialidad;
	}
	
	function eliminar(){
		
		return "Usted va a eliminar <br/>".$this->cedula;
	}
	
}
?>