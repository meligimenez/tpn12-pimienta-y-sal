const products = require('../data/products')

module.exports = {
  detail : (req, res) => {

    const product = products.find(product => product.id === +req.params.id)
 
    return res.render('detalleMenu',{ 
      product
    })
  }
}