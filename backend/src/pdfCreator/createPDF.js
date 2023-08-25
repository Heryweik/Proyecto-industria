const path = require('path')
var fs = require('fs');

function information(doc) {
  // Metadatos del archivo PDF
  doc.info['Title'] = 'Productos Recomendados';
  doc.info['Author'] = 'Plazitanet';
}

function fonts(doc) {
  //fuentes para el texto
  doc.registerFont('Nunito-Light', path.join(__dirname, './fonts/Nunito-Light.ttf'));
  doc.registerFont('Nunito-Bold', path.join(__dirname, './fonts/Nunito-Bold.ttf'));
  doc.registerFont('OpenSans-Light', path.join(__dirname, './fonts/OpenSans-Light.ttf'));
  doc.registerFont('OpenSans-Bold', path.join(__dirname, './fonts/OpenSans-Bold.ttf'));
  doc.registerFont('Poppins-Light', path.join(__dirname, './fonts/Poppins-Light.ttf'));
  doc.registerFont('Poppins-Regular', path.join(__dirname, './fonts/Poppins-Regular.ttf'));
}

function head(y, doc) {
  //creacion de la cabecera
  let grad = doc.linearGradient(0, 0, 100, 0);
  grad.stop(0, '#74ebd5')
    .stop(1, '#9face6');
  doc
    .font('Nunito-Bold')
    .fontSize(22)
    .fill(grad)
    .text('Da un vistazo a tus productos recomendados', 50, y, { align: 'center' });
}

//nueva categoria
function newCat(y, doc, cat) {
  doc
    .font('OpenSans-Bold')
    .fontSize(18)
    .fill('#fbac38')
    .text(cat, 50, y, { align: 'center' });
}

function products(obj, y, doc, e) {
  //Creacion de productos
  try {
    doc.image(path.join(__dirname, '../dbimagesProducts/' + obj.var_name), 50, y, {
      fit: [55, 55], align: 'center', valign: 'center'
    })
      .font('Poppins-Light')
      .fontSize(15).fillColor('black').text(obj.var_name_product, 115, y)
      .fontSize(8).text(obj.text_description)
      .font('Times-Bold').fontSize(12).fillColor('red').text("L." + obj.dou_price, { align: 'right' })
  } catch (error) {
    //Algunas imagenes dan error por ciertas razones, favor remplazarlas
    console.log("Problemas con la imagen: " + obj.var_name)
    e--
  }

}

function deleteFiles() {
  fs.readdir(path.join(__dirname, '../documentPDF'), 
  function (err, archivos) {
    if (err) {
      console.log(err)
      return
    }
    archivos.map(ar=>{
      fs.unlinkSync(path.join(__dirname, '../documentPDF/'+ar))
    })
  });
}

module.exports =
{
  information,
  head,
  newCat,
  products,
  fonts,
  deleteFiles
};


