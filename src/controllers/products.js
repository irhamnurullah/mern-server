exports.createProduct = (req, res, next) => {
  res.json({
    message: "Create Products Success",
    data: {
      id: 1,
      name: "Coffe Puntang",
      price: "50000",
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "Get Products Success",
    data: [
      {
        id: 1,
        name: "Coffe Puntang",
        price: "50000",
      },
    ],
  });
  next();
};
