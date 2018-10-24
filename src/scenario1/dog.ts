import {Food} from "./food";

export class Dog {

  public eatFood(foodName: string): string {
    console.log(foodName);
    const food = new Food(foodName);
    return food.getDeliciousFoodName();
  }
}
