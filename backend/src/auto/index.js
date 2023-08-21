const auth = require("node-cron")
const {create} = require("../pdfCreator")
const {sendEmail} = require("./send")

//15 9 * * tue
//* * * * *  envio cada minuto

auth.schedule('15 9 * * tue',()=>{
    create() //crea los pdf
})


auth.schedule('16 9 * * tue',()=>{
    sendEmail() //envia los pdf
})


module.exports = auth