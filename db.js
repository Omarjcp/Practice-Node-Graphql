let products = new Promise((res, rej) =>
  res([
    {
      id: 1,
      name: "Samsung s20",
      description:
        "Pantalla 6.5' FHD Infinity-O Cámara frontal de 32 Mp Sentite en medio del arcoíris con estos colores Pro-grade Camera",
      price: {
        amount: "159.999",
        currency: "ARS",
      },
    },
    {
      id: 2,
      name: "Samsung s21",
      description:
        "Pantalla 7.5' FHD Infinity-O Cámara frontal de 33 Mp Sentite en medio del arcoíris con estos colores ProX-grade Camera",
      price: {
        amount: "259.999",
        currency: "ARS",
      },
    },
    {
      id: 3,
      name: "Samsung s22",
      description:
        "Pantalla 8.5' FHD Infinity-O Cámara frontal de 34 Mp Sentite en medio del arcoíris con estos colores SuperPro-grade Camera",
      price: {
        amount: "359.999",
        currency: "ARS",
      },
    },
    {
      id: 4,
      name: "Samsung s23",
      description:
        "Pantalla 9.5' FHD Infinity-O Cámara frontal de 35 Mp Sentite en medio del arcoíris con estos colores MegaPro-grade Camera",
      price: {
        amount: "459.999",
        currency: "ARS",
      },
    },
    {
      id: 5,
      name: "Samsung s24",
      description:
        "Pantalla 10.5' FHD Infinity-O Cámara frontal de 36 Mp Sentite en medio del arcoíris con estos colores HiperMegaProXUltra-grade Camera",
      price: {
        amount: "559.999",
        currency: "ARS",
      },
    },
  ])
);

module.exports = {
  products,
};
