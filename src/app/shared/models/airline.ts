import {IAirline} from "../interfaces/i-airline";

export class Airline implements IAirline {
  icao!: string;
  name!: string;
}
