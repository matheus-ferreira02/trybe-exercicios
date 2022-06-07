enum TypeAirplane {
  Commercial = 'Commercial',
  Private = 'Private',
}

interface Flight {
  airplane: TypeAirplane,
  origin: string,
  destiny: string,
}

class Flight {
  constructor(airplane: TypeAirplane, origin: string, destiny: string) {
    this.airplane = airplane;
    this.origin = origin;
    this.destiny = destiny;
  }
};
