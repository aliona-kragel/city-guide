import { LocationTypes } from "types/locationTypes";

export interface ICities {
  locationsList: LocationTypes[] | null,
  attractionsList: IAttractionsListTypes[] | null,
  attractionDetails: IAttractionDetailsTypes | null,
  inputValue: string
}

export interface IAttractionsListTypes {
  type: string,
  id: string,
  geometry: {
    type: string,
    coordinates: [
      number,
      number
    ]
  },
  properties: {
    xid: string,
    name: string,
    dist: number,
    rate: number,
    wikidata: string,
    kinds: string
  }
}

export interface IAttractionDetailsTypes {
  xid: string,
  name: string,
  address: {
    road: string,
    house: string,
    state: string,
    suburb: string,
    country: string,
    postcode: string,
    country_code: string,
    house_number: string,
    state_district: string
  },
  rate: string,
  wikidata: string,
  kinds: string,
  sources: {
    geometry: string,
    attributes: [
      string
    ]
  },
  otm: string,
  wikipedia: string,
  image: string,
  preview: {
    source: string,
    height: number,
    width: number,
  },
  wikipedia_extracts: {
    title: string,
    text: string,
    html: string,
    point: {
      lon: number,
      lat: number,
    }
  }
}