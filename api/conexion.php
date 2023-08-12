<?php
	class Conexion{
		private $host = "bd-proyecto.cs5mqlupmen8.us-east-1.rds.amazonaws.com";
		private $usuario = "admin";
		private $password = "admin123";
		private $baseDatos = "Industria";
		private $puerto = 3306;
		private $link;

		public function __construct(){
			$this->link = mysqli_connect(
				$this->host,
				$this->usuario,
				$this->password,
				$this->baseDatos,
				$this->puerto
			);
		}

		public function ejecutarConsulta($sql){
			return mysqli_query($this->link, $sql);
		}

		public function obtenerFila($resultado){
			return mysqli_fetch_array($resultado);
		}

        public function obtenerArreglo($resultado, $tipo = MYSQLI_BOTH){
			return mysqli_fetch_all($resultado, $tipo);
		}

		public function cerrarConexion(){
			mysqli_close($this->link);
		}

		public function getLink(){
			return $this->link;
		}

		public function antiInyeccion($texto){
			return mysqli_real_escape_string($this->link, $texto);
		}

		public function ultimoId(){
			return mysqli_insert_id($this->link);
		}
	}

?>