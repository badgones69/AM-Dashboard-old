import {Region} from "../models/region";
import {Country} from "../models/country";

export interface IAirport {
  id: number,
  iata: string,
  name: string,
  city: string,
  country: Country,
  region: Region | null,
  hub: boolean
}
