import {Country} from "./country";
import {Region} from "./region";
import {IAirport} from "../interfaces/i-airport";

export class Airport implements IAirport {
  id!: number;
  iata!: string;
  name!: string;
  city!: string;
  country!: Country;
  region!: Region | null;
  hub!: boolean
}
