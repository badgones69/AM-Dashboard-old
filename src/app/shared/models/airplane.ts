import {Model} from "./model";
import {IAirplane} from "../interfaces/i-airplane";

export class Airplane implements IAirplane {
  serialNumber!: string;
  model!: Model;
  modelCopyNumber!: string;
}
