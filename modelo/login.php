<?php

require_once('modelo/datos.php');

class loginjs extends datos{
	
	
	private $correous;
	private $contraseñaus;
	

	function set_correous($valor){
		$this->correous= $valor;
	}
	function set_contraseñaus($valor){
		$this->correous= $valor;
	}
	
	
	function get_correous(){
		return $this->correous;
	}

	function get_contraseñaus(){
		return $this->correous;
	}
	
	function incluir(){

		return "Usted va a incluir <br/>".$this->correous.
				"<br/>".$this->contraseñaus;
	}
	
	function modificar(){

		return "Usted va a modificar <br/>".$this->correous.
		"<br/>".$this->contraseñaus;
	}
	
	function eliminar(){
		
		return "Usted va a eliminar <br/>".$this->correous;
	}
	
}
?>