export interface chats{
    Foto: string
    Nombre: string
    Producto: string
    Rol: string
    fk_id_product: string
    id_chat: number
    id_comprador: number
    id_vendedor: number
    no_leidos: string
    ultimo_mensaje: string
    fk_id_user_buyer:string
    fk_id_user_seller:string
}

export interface sendMessenge{
    fk_id_chat:number
    fk_id_user:number|null
    text_contents:string
}

export interface listMessenge{
    fk_id_user: string
    id_message: string
    text_contents: string
    hourMessenge: string
    dateMessenge: string
    bit_status:number
}

