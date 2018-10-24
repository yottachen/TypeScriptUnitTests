import {Food} from "./food";

export class Cat {

  public eatFood(foodName: string): string {
    console.log(foodName);
    const food = new Food(foodName);
    return food.getDeliciousFoodName();
  }
}
