import {Airport} from "../models/airport";

export interface IRoute {
  code: string,
  departureAirport: Airport,
  arrivalAirport: Airport
}
