import {Country} from "./country";
import {Region} from "./region";
import {IAirport} from "../interfaces/i-airport";

export class Airport implements IAirport {
  iata!: string;
  name!: string;
  city!: number;
  country!: Country;
  region!: Region;
  hub!: boolean
}
