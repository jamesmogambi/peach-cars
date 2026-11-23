export interface Media {
  id?: string | null;
  url?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
}

export interface Brand {
  id?: string | null;
  brand?: string | null;
  models?: any[] | null;
}

export interface Specification {
  id?: string | null;
  name?: string | null;
  value?: string | null;
}

export interface Car {
  id?: string | null;
  productid?: string | null;
  carName: string;
  name?: string | null;
  brand?: Brand | string | null;
  make?: string | null;
  bodyStyle?: string | null;
  price?: string | number | null;
  year?: number | string | null;
  mileage?: number | string | null;
  engine?: string | null;
  transmission?: string | null;
  fuel?: string | null;
  drive?: string | null;
  interior?: string | null;
  exterior?: string | null;
  availability?: boolean | null;
  arrivalDate?: string | null;
  quantity?: number | null;
  coverImage?: Media | string | null;
  images?: (Media | string)[] | null;
  gallery?: (Media | string)[] | null;
  specifications?: (string | Specification)[] | null;
  [key: string]: any;
}

export interface AboutUs {
  id?: string | null;
  title?: string | null;
  content?: any;
  coverImage?: Media | string | null;
  [key: string]: any;
}

export interface Carousel {
  id?: string | null;
  title?: string | null;
  image?: Media | string | null;
  link?: string | null;
}

export interface Contact {
  id?: string | null;
  title?: string | null;
  location?: string | null;
  phone?: string | null;
  email?: string | null;
}

export interface Service {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  coverImage?: Media | string | null;
}

export interface User {
  id?: string | null;
  email?: string | null;
  [key: string]: any;
}