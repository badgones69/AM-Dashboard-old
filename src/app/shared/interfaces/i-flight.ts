import {Airplane} from "../models/airplane";
import {Route} from "../models/route";
import {Time} from "@angular/common";

export interface IFlight {
  number: string,
  schedule: Time,
  airplane: Airplane,
  route: Route
}
