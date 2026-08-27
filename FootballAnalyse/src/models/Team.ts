export class Team {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;

  constructor(
    id: number,
    name: string,
    code: string,
    country: string,
    founded: number,
    national: boolean,
    logo: string
  ) 
  {
    this.id = id;
    this.name = name;
    this.code = code;
    this.country = country;
    this.founded = founded;
    this.national = national;
    this.logo = logo;
  }
}