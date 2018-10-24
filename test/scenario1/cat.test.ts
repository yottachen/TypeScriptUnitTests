import { Cat } from '../../src/scenario1/cat';

const mockGetDeliciousFoodName = jest.fn(() => 'Cat Food');
jest.mock('../../src/scenario1/food', () => {
  return {
    Food: jest.fn(() => {
      return { getDeliciousFoodName: mockGetDeliciousFoodName };
    })
  };
});

describe('eatFood', () => {
  it('should return cat food', () => {
    const cat = new Cat();
  
    return expect(cat.eatFood('FoodName')).toEqual('Cat Food');
  });
});
