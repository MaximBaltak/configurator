import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ResponseParams} from "./types/response-params";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/params')
  getParams(): ResponseParams {
    return {
      sizes: this.appService.sizes,
      number_drinks: this.appService.numberDrinks
    };
  }
}
