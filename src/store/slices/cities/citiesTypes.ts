import { LocationTypes } from "types/locationTypes";

export interface ICities {
  locationsList: LocationTypes[] | null,
  attractionsList: IAttractionsListTypes[] | null,
  attractionDetails: IAttractionDetailsTypes | null,
  locationDescription: ICityDescriptionTypes | null,
  inputValue: string,
  responseReceived: boolean
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

export interface ICityDescriptionTypes {
  place_id: number,
  osm_type: string,
  osm_id: number,
  category: string,
  type: string,
  admin_level: number,
  localname: string,
  names?: string,
  addresstags: {
    continent: string,
    country: string
  },
  country_code: string,
  extratags: {
    capital: string,
    ["capital_ISO3166-1"]: string,
    linked_place: string,
    ele: string,
    place: string,
    population: string,
    ["population:date"]: string,
    ["source:name:br"]: string,
    ["source:name:oc"]: string,
    ["source:population"]: string,
    website: string,
    wikidata: string,
    wikipedia: string
  },
  geometry: {
    type: string,
    coordinates: [number, number]
  },
  linked_places: [
    {
      localname: string,
      place_id: number,
      osm_id: number,
      osm_type: string,
      place_type: null,
      class: string,
      type: string,
      admin_level: number,
      rank_address: number,
      distance: number,
      isaddress: null
    }
  ]
}