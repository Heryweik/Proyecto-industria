var sqlGetUsers = "SELECT * FROM user WHERE bit_status = 1"

function sqlSuscriptions(id) {
    let sql = "SELECT fk_id_user,fk_id_product_category,var_name FROM subscription,product_category"
        + " where subscription.fk_id_product_category = product_category.id_product_category"
        + ` AND fk_id_user=${id}`
    return sql
}

function sqlGetProducts(id){
    sql = "SELECT fk_id_product_category,product.var_name AS var_name_product,text_description,"
    + "dou_price,photographs.var_name FROM product LEFT OUTER JOIN  photographs ON "
    + `photographs.fk_id_product=product.id_product WHERE fk_id_department = ${id} AND `
    + `bit_availability = 1 GROUP BY product.id_product `
    + "ORDER BY int_views DESC"
    return sql
} 


module.exports =
{
    sqlGetUsers,
    sqlSuscriptions,
    sqlGetProducts
}