import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //хранилище параметров
  #sizes = ['стандартный','увеличенный']
  #numberDrinks = [6,8,12]
  public get sizes(): string[] {
    return this.#sizes
  }
  public get numberDrinks(): number[] {
    return this.#numberDrinks
  }
}
