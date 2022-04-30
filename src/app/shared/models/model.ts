import {Manufacturers} from "../enums/manufacturers";
import {IModel} from "../interfaces/i-model";

export class Model implements IModel {
  id!: number;
  designation!: string;
  manufacturer!: Manufacturers;
}
