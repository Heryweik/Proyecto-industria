const gen = require("./createPDF");
const conection = require('../config/connection')
var PDFDocument = require('pdfkit');
var fs = require('fs');
const path = require('path')
const SQLconsult = require('./SQLconsults')

function create() {
    gen.deleteFiles()
    conection.query(SQLconsult.sqlGetUsers, (err2, rows2, fields) => {
        if (err2) console.log({ status: '0', msf: err.sqlMessage });
        else {
            for (let i = 0; i < rows2.length; i++) {
                conection.query(SQLconsult.sqlSuscriptions(rows2[i].id_user), (err, rows, fields) => {
                    if (err) console.log({ status: '1', msf: err.sqlMessage });
                    else {
                        if (rows.length > 0) {
                            conection.query(SQLconsult.sqlGetProducts(rows2[i].fk_id_department), (err1, rows1, fields) => {
                                if (err1) {
                                    console.log({ status: '2', msf: err1.sqlMessage });
                                }
                                else {
                                    var emphyCats = false
                                    for (let l = 0; l < rows.length; l++) {
                                        let cat = rows[l]
                                        let emptyProducts = true //verificacion si no hay productos en esa categoria
                                        for (let j = 0; j < rows1.length; j++) {
                                            if (rows1[j].fk_id_product_category == cat.fk_id_product_category) {
                                               emptyProducts = false
                                               break
                                            }
                                        }
                                        if(!emptyProducts){
                                            emphyCats = true
                                            break
                                        }
                                    }

                                    if (emphyCats) {
                                        let doc = new PDFDocument({
                                            pdfVersion: '1.5',
                                            lang: 'en-US',
                                            tagged: true,
                                            displayTitle: true
                                        });
                                        let p = './src/documentPDF/' + rows2[i].id_user + '_suscription.pdf'
                                        doc.pipe(fs.createWriteStream(p));
    
                                        gen.information(doc)//genera la informacion
                                        gen.fonts(doc)//genera las fuentes
                                        var y = 10
                                        gen.head(y, doc)//Creacion del encabezado
                                        y += 35
                                        var addNewPage = false
                                        
                                        for (let h = 0; h < rows.length; h++) {
                                            let cat = rows[h]
                                            let emptyProducts = true //verificacion si no hay productos en esa categoria
                                            for (let j = 0; j < rows1.length; j++) {
                                                if (rows1[j].fk_id_product_category == cat.fk_id_product_category) {
                                                   emptyProducts = false
                                                   break
                                                }
                                            }
                                            if(!emptyProducts){
                                                if (addNewPage) doc.addPage()
                                                addNewPage = true    
                                                
                                                gen.newCat(y, doc, cat.var_name)//Titulo de la categoria
                                                y += 30
                                                var e = 0
                                                for (let j = 0; j < rows1.length; j++) {
                                                    if (rows1[j].fk_id_product_category == cat.fk_id_product_category) {
                                                        if (e > 9) break
                                                        gen.products(rows1[j], y, doc, e)//genera la targeta del producto
                                                        e++
                                                        y += 63
                                                    }
                                                }
                                                y = 60
                                                
                                            }
                                            
                                        }
                                        doc.end() //termina la escritura del archivo pdf
                                    }
                                    
                                    
                                }
                            })

                        }
                    }
                })
            }
            console.log("->Proceso de creacion de pdfs: Finalizado");
        }
    })
}

module.exports = { create }