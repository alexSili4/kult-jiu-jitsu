export interface IContactsForm {
  name: string;
  phone: string;
  coach: string;
}

export interface IPoint {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  x?: number;
  y?: number;
}

export interface IMapPoint {
  bottom: string;
  right: string;
}

export interface IMap {
  img: string;
  start: IMapPoint;
  finish: IMapPoint;
  path: IMapPoint[];
  parking: IMapPoint[];
}
