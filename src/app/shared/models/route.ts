import {Airport} from "./airport";
import {IRoute} from "../interfaces/i-route";

export class Route implements IRoute {
  code!: string;
  departureAirport!: Airport;
  arrivalAirport!: Airport;
}
