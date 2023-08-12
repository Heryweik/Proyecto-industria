<?php

namespace Model;

class Servicio extends ActiveRecord {
    //Base de datos

    protected static $tabla = 'servicio';
    protected static $columnasDB = ['id','nombre','descripcion','precio'];

    public $id;
    public $nombre;
    public $descripcion;
    public $precio;

    public function __construct($args =[]){
        $this->id = $args['id'] ?? null;
        $this->nombre = $args['nombre'] ?? '';
        $this->descripcion = $args['descripcion'] ?? '';
        $this->precio = $args['precio'] ?? '';
    }

    public function validar() {
        if(!$this->nombre) {
            self::$alertas['error'][] = 'El Nombre del Servicio es Obligatorio';
        }
        if(!$this->descripcion) {
            self::$alertas['error'][] = 'La descripcion del Servicio es Obligatorio';
        }
        if(!$this->precio) {
            self::$alertas['error'][] = 'El Precio del Servicio es Obligatorio';
        }
        if(!is_numeric($this->precio)) {
            self::$alertas['error'][] = 'El precio no es válido';
        }

        return self::$alertas;
    }
}