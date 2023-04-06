const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services/index');
const { productsModel } = require('../../../src/models/index');

const { allProducts, validName1 } = require('./mocks/products.service.mock');

describe('Verificando service de produtos', function () {
  describe('listagem de produtos', function () {
    it('retorna a lista completa de produtos', async function () {
      // arrange
      sinon.stub(productsModel, 'findAllProducts').resolves(allProducts);
      
      // act
      const result = await productsService.findAllProducts();

      // assert
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(allProducts);
    });
    // it('retorna um erro caso receba um ID inválido', async function () {
    //   // arrange: Especificamente nesse it não temos um arranjo pois nesse fluxo o model não é chamado!

    //   // act
    //   const result = await productsService.findAllProductsById('a');
      
    //   // assert
    //   expect(result.type).to.equal('PRODUCT_NOT_FOUND');
    //   expect(result.message).to.equal('Product not found');
    // });

    it('retorna um erro caso o produto não exista', async function () {
      // arrange
      sinon.stub(productsModel, 'findProductsById').resolves(undefined);
     
      // act
      const result = await productsService.findAllProductsById(1);
      
      // assert
      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });
    
    it('retorna o produto caso ID exista', async function () {
      // arrange
      sinon.stub(productsModel, 'findProductsById').resolves(allProducts[0]);
      
      // act
      const result = await productsService.findAllProductsById(1);

      // assert
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allProducts[0]);
    });
  });

  // describe('cadastro de produtos com valores válidos', function () {
  //   it('retorna o ID do produto cadastrado', async function () {
  //     // arrange
  //     sinon.stub(productsModel, 'createProduct').resolves(1);
  //     sinon.stub(productsModel, 'findProductsById').resolves(allProducts[0]);
      
  //     // act
  //     const result = await productsService.createProduct(validName1);

  //     // assert
  //     expect(result.type).to.equal(null);
  //     expect(result.message).to.deep.equal(allProducts[0]);
  //   });
  // });

   afterEach(function () {
     sinon.restore();
   });
 });