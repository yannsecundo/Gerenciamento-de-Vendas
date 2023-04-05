// tests/unit/services/mocks/passenger.service.mock.js
const validName1 = 'Martelo de Thor';
const validName2 = 'Traje de encolhimento';
const invalidValue = 'a';

const allProducts = [
  {
    id: 1,
    name: validName1,
  },
  {
    id: 2,
    name: validName2
  }
];

module.exports = {
  allProducts,
  validName1,
  invalidValue,
};