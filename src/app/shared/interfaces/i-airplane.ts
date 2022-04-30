import {Model} from "../models/model";

export interface IAirplane {
  serialNumber: string,
  model: Model,
  modelCopyNumber: string
}
