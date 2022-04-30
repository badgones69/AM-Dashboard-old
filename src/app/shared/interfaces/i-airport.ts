import {Region} from "../models/region";
import {Country} from "../models/country";

export interface IAirport {
  iata: string,
  name: string,
  city: number,
  country: Country,
  region: Region,
  hub: boolean
}
