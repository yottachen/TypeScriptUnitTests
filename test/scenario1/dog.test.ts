import { Dog } from "../../src/scenario1/dog";

const mockGetDeliciousFoodName = jest.fn(() => "Dog Food");
jest.mock("../../src/scenario1/food", () => {
  return {
    Food: jest.fn(() => {
      return { getDeliciousFoodName: mockGetDeliciousFoodName };
    })
  };
});

describe("eatFood", () => {
  it("should return email with default emailTemplateOption", () => {
    const dog = new Dog();

    return expect(dog.eatFood("FoodName")).toEqual("Dog Food");
  });
});
