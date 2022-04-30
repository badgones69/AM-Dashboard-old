import {Time} from "@angular/common";
import {Airplane} from "./airplane";
import {Route} from "./route";
import {IFlight} from "../interfaces/i-flight";

export class Flight implements IFlight {
  number!: string;
  schedule!: Time;
  airplane!: Airplane;
  route!: Route;
}
