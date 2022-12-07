const ProductModel = require("../../database/models/Products");

/**
 * Ojo con esto. Si bien me gusta que todo este modularizado tal como vimos durante las clases
 * Creo que no esta correctamente implementado el concepto de "controller" y "resolver".
 * El controller, generalmente es quien se encarga de comenzar la ejecucion de la logica de negocio, 
 * pero no es quien la realiza. Es decir, normalmente lo que tendriamos en un controller es la llamada al
 * metodo que luego va a la DB a buscar o actualizar datos. A este ultimo, se le denomina repositorio.
 * 
 * Por lo que la forma correcta de distribuir la app seria: controller -> resolver -> repositorio (db)
 * 
 * @note Tu logica esta muy bien igual! Solamente tenes que moverla al file correcto!
 */

const createProductController = async ({ input }) => {
  const {
    name,
    description,
    price: { amount, currency },
  } = input;

  const productToCreate = await new ProductModel({
    name,
    description,
    price: {
      amount: parseFloat(amount),
      currency,
    },
  });

  const productCreated = productToCreate.save();

  return productCreated;
};

module.exports = {
  createProductController,
};
