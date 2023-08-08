<?php

namespace Model;

class Producto extends ActiveRecord {
    //Base de datos

    protected static $tabla = 'producto';
    protected static $columnasDB = ['ID','ID_Categoria','Nombre','Marca','Descripcion','Cantidad_disponible','Precio_compra','Precio_venta'];

    public $ID;
    public $ID_Categoria;
    public $Nombre;
    public $Marca;
    public $Descripcion;
    public $Cantidad_disponible;
    public $Precio_compra;
    public $Precio_venta;


    public function __construct($args =[]){
        $this->ID = $args['ID'] ?? null;
        $this->ID_Categoria = $args['ID_Categoria'] ?? '';
        $this->Nombre = $args['Nombre'] ?? '';
        $this->Marca = $args['Marca'] ?? '';
        $this->Descripcion = $args['Descripcion'] ?? '';
        $this->Cantidad_disponible = $args['Cantidad_disponible'] ?? '';
        $this->Precio_compra = $args['Precio_compra'] ?? '';
        $this->Precio_venta = $args['Precio_venta'] ?? '';
    }

    public function validar() {
        if(!$this->Nombre) {
            self::$alertas['error'][] = 'El Nombre del Producto es Obligatorio';
        }
        if(!$this->Marca) {
            self::$alertas['error'][] = 'La Marca del Producto es Obligatorio';
        }
        if(!$this->Descripcion) {
            self::$alertas['error'][] = 'La Descripcion del Producto es Obligatorio';
        }
        if(!$this->Cantidad_disponible) {
            self::$alertas['error'][] = 'La Cantidad disponible del Producto es Obligatorio';
        }
        if(!$this->Precio_compra) {
            self::$alertas['error'][] = 'El Precio de compra del Producto es Obligatorio';
        }
        if(!is_numeric($this->Precio_compra)) {
            self::$alertas['error'][] = 'El precio no es válido';
        }
        if(!$this->Precio_venta) {
            self::$alertas['error'][] = 'El Precio del Producto es Obligatorio';
        }
        if(!is_numeric($this->Precio_venta)) {
            self::$alertas['error'][] = 'El precio no es válido';
        }

        return self::$alertas;
    }
}