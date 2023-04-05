const productMock = {
  name: 'mascara do batman',
};

const newProductMock = { id: 1, ...productMock };

const productListMock = [newProductMock];

module.export = {
  productMock,
  productListMock,
  newProductMock,
}