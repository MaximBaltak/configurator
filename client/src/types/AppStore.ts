import { CoffeeMachine } from '@/types/coffee-machine'

export interface AppStore {
  coffeeMachines: CoffeeMachine[],
  selectSize: string[],
  selectNumberDrinks: number[]
}
