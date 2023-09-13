import { TypeSizes } from '@/enums/type-sizes'
import { NumberOfDrinks } from '@/enums/number-of-drinks'

export interface CreateCoffeeMachine {
  id: number
  size: TypeSizes,
  numberDrinks: NumberOfDrinks,
}
export interface CoffeeMachine extends CreateCoffeeMachine{
  count: number
}
