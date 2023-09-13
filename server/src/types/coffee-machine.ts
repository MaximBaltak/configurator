import { TypeSizes } from '../enums/type-sizes'
import { NumberOfDrinks } from '../enums/number-of-drinks'


export interface CoffeeMachine {
  id: number
  size: TypeSizes,
  numberDrinks: NumberOfDrinks,
  count: number
}
